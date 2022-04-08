import { useCallback, useReducer, useState } from "react";
import { useWallet } from "../wallet-provider";

// const asyncFn = async () => {
//   try {
//     setLoading(true)
//     setProgressValue(30)
//     setProgressText('Signature acquired. Signing extrinsic... ')
//     const Amount = new BigNumber(amount).times(10 ** Decimals).toNumber()

//     // const m = keyring.decodeAddress(current.address)
//     // const memo = u8aToHex(m)

//     // const txs = api.tx.utility.batchAll([
//     //   api.tx.crowdloan.contribute(parachainId, Amount, null),
//     //   api.tx.crowdloan.addMemo(parachainId, memo)
//     // ])
//     const tx = api.tx.crowdloan.contribute(parachainId, Amount, null)
//     unsub = await tx.signAndSend(current.address, (result) => {

//       const { events = [], status } = result

//       if (status.isReady) {
//         toast({
//           description: 'Waiting...',
//           status: 'info',
//           duration: null,
//           id: 'ready',
//           position: 'top'
//         })
//         setProgressValue(50)
//         setProgressText('Ready')
//       } else if (status.isInBlock || status.isFinalized) {
//         events.forEach(({ event }) => {

//           if (event.method === 'ExtrinsicSuccess') {

//             setContributed({
//               address: current.address,
//               amount,
//               hash: tx.hash.toHex()
//             })
//             setCompleted(6)
//           } else if (event.method === 'ExtrinsicFailed') {
//             const { data: [error] } = event

//             if ((error as any).isModule) {
//               // for module errors, we have the section indexed, lookup
//               const decoded = api.registry.findMetaError((error as any).asModule);
//               const { docs } = decoded;

//               toast({
//                 description:`${docs.join(' ')}`,
//                 status:'error',
//                 position:'top'
//               })
//             } else {
//               // Other, CannotLookup, BadOrigin, no extra info
//               console.log(error.toString());
//               toast({
//                 description:error.toString(),
//                 status:'error',
//                 position:'top'
//               })
//             }
//           }
//         })
//         toast.close('ready')
//         setLoading(false)
//         unsub()
//       }
//     })
//   } catch (error: any) {
//     toast({
//       status: 'error',
//       description: error.message
//     })
//     setLoading(false)
//   }
// }
// asyncFn()
type ContributionProgress = 'pending' | 'loading' | 'completed' | 'error'

export function useCrowdloan() {
  const { account } = useWallet()
  const [progress, setProgress] = useState<ContributionProgress>('pending')

  const submitContribution = useCallback((amount: number) => {
    setProgress('loading')
  }, [setProgress])

  return {
    account,
    progress,
    submitContribution
  }
}
