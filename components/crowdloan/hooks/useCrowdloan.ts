import { useApiProvider } from "@substra-hooks/core";
import { useState } from "react";
import { useWallet } from "../wallet-provider";

const PARACHAIN_ID = '2113'

type ContributionProgress = 'pending' | 'loading' | 'completed' | 'error'

export function useCrowdloan() {
  const api = useApiProvider()
  const { account } = useWallet()

  const [progress, setProgress] = useState<ContributionProgress>('pending')

  const submitContribution = async (amount: number) => {
    setProgress('loading')

    if (!api) {
      setProgress('error')
      console.error('API not available')
      return
    }

    if (!account) {
      setProgress('error')
      console.error('Account not available')
      return
    }

    debugger;

    try {
      // create the transaction
      const tx = api.tx.crowdloan.contribute(PARACHAIN_ID, amount, null)
      const unsubscribe = await tx.signAndSend(account.address, ({ status, events, dispatchError}) => {
        // watch for status changes
        console.log({
          status,
          events,
          dispatchError
        })

        if (status.isReady) {
          console.log({ status })
          console.log('Waiting...')
        } else if (status.isInBlock || status.isFinalized) {
          events.forEach(({ event }) => {
            if (event.method === 'ExtrinsicSuccess') {
              console.log({
                method: 'ExtrinsicSuccess',
                address: account.address,
                amount,
                hash: tx.hash.toHex()
              })
            } else if (event.method === 'ExtrinsicFailed') {
              const { data: [error] } = event
              console.log({
                method: 'ExtrinsicFailed',
                error
              })
            }
          })

          // unsubscribe
          unsubscribe()
        }
      })
    } catch (error: any) {
      setProgress('error'),
      console.error('Error occurred: ', error.message || 'Unknown error')
    }
  }

  return {
    account,
    progress,
    submitContribution
  }
}
