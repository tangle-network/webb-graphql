import { Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";

function buildTransactData(
  recipient: Address,
  amount: BigInt,
  relayer: Address,
  fee: BigInt,
  refund: BigInt,
  token: Address
): Bytes {
  const dummyFunctionSig:string = '0xa38f76e8';

  const proof = Bytes.fromHexString(
    '0x0475bdaa274a1d55391cfcf587afefadc4c497c70b6d0a62e1b51154ed5969bb26642b4c5ee9f6e1bdfd4d8fa06a600699c1a2599197b6fa82b95b3a0ce58779000a1f1af2b452e0f0342719a0777f5b0e3cfdc3e261b62fa971b9a247bb6ece0500aea30437d112bd5cd8e5bf8cfb65418ebb41b642d371c6ea49b555450f6d069721c72857cf2f30b931f2eed6e4665f4053fbbc1a91932e4d58343ece88e32617430f4ffac8617e1a380afa6ce4f0c5244d0f916813538808ce9778d3cabd1b44b57c47b4939020ea973b8e71e375a65bee652727a5bbf14d556c7dce9689038cf25dd97a23785a5131c27d2daf3e340c40afad489da83a588c182bbc2616'
  );

  const roots = Bytes.fromHexString(
    '0x1d15b12367fb5fcc9739bd8a70aab1a59f4d3c96281a40b2ca0e4925b5e5692c0cebe3de811c0e6e3466cd1a463c759b4019dc19d5b24348be425730f63db9dc23ab323453748129f2765f79615022f5bebd6f4096a796300aab049a60b0f18723ab323453748129f2765f79615022f5bebd6f4096a796300aab049a60b0f18723ab323453748129f2765f79615022f5bebd6f4096a796300aab049a60b0f18723ab323453748129f2765f79615022f5bebd6f4096a796300aab049a60b0f18723ab323453748129f2765f79615022f5bebd6f4096a796300aab049a60b0f18723ab323453748129f2765f79615022f5bebd6f4096a796300aab049a60b0f187'
  );
  const extensionRoots = Bytes.fromHexString('0x');
  const inputNullifier1 = Bytes.fromHexString(
    '0x21226830769161788640160748259612406388032005022297056334991032758157742607698'
  );
  const inputNullifier2 = Bytes.fromHexString(
    '0x13587132602647988697943222527053126006013515262685945391205733997569856330261'
  );

  const auxPublicInputsBytes = Bytes.fromHexString(
    '0x0000000000000000000000000000000000000000000000000000000000000000'
  );

  const com1 = Bytes.fromHexString('0x12280358413391051954815982034481046421101717515441136535267837962801360590685');
  const com2 = Bytes.fromHexString('0x17753123288225924871335292858341090548246001490837206477243902898474793113394');
  const pubAmount = BigInt.fromString('50000000000000000000');
  const extDataHash = Bytes.fromHexString(
    '0x5851782729587194271435774257001525337865823128641196509784354335913672864280'
  );

  const enc1 = Bytes.fromHexString(
    '0x56dc89653fd49ee105c84cc2d6b6bae5362cac2aff8fbbd2765ae912d6450c9d2298ccd25053133c6e08e9e3c773b8496baf8ea3de3d12055e3a3183bc50d83337956849df1263dcad79bba7512e8166d04df05cf4fcf2dc1b35008452f3e98b626c1bea2b0953324c96380eb9a5f6e9b59822eb6a8330232ec524522da3a4de8ef90fc8cb257cbe5d01e17a147d229466c821ef475f03ce55ddac216160a42e1f9f89ff8c8485f6'
  );
  const enc2 = Bytes.fromHexString(
    '0x13afe445ecbcd4e16b1e4bef4a32f0748d38b8e459c91645be225e457bce1d8e72f46d66452f943c765d59976d2dff8d5f900239d2c568781b4e9f34bb0cbfe4445019a5707214d2cb1261fc0ed8b118aab38aace9180acb1ebb98da563f1c732568f276f031f7413218fb2a470bb98de3676e8d70677b1a67b5e1776a051400452dd28eb143149ba1b09faa96f12480b45b654bf66b2b07d1daf763fa54c4d23632a5abea967a60'
  );
  // ExternalData

  let externalDataList: Array<ethereum.Value> = [];
  externalDataList[0] = ethereum.Value.fromAddress(recipient);
  externalDataList[1] = ethereum.Value.fromSignedBigInt(amount);
  externalDataList[2] = ethereum.Value.fromAddress(relayer);
  externalDataList[3] = ethereum.Value.fromSignedBigInt(fee);
  externalDataList[4] = ethereum.Value.fromSignedBigInt(refund);
  externalDataList[5] = ethereum.Value.fromAddress(token);

  // Public inputs
  let publicInputsDataList: Array<ethereum.Value> = [];
  publicInputsDataList[0] = ethereum.Value.fromBytes(roots);
  publicInputsDataList[1] = ethereum.Value.fromBytes(extensionRoots);
  publicInputsDataList[2] = ethereum.Value.fromArray([
    ethereum.Value.fromBytes(inputNullifier1),
    ethereum.Value.fromBytes(inputNullifier2),
  ]);
  publicInputsDataList[3] = ethereum.Value.fromArray([ethereum.Value.fromBytes(com1), ethereum.Value.fromBytes(com2)]);

  publicInputsDataList[4] = ethereum.Value.fromUnsignedBigInt(pubAmount);
  publicInputsDataList[5] = ethereum.Value.fromBytes(extDataHash);

  const proofData = ethereum.Value.fromBytes(proof);
  const auxPublicInputs = ethereum.Value.fromBytes(auxPublicInputsBytes);

  const externalData = ethereum.Value.fromArray(externalDataList);
  const publicInputs = ethereum.Value.fromArray(publicInputsDataList);
  const encryptedOutput = ethereum.Value.fromArray([ethereum.Value.fromBytes(enc1), ethereum.Value.fromBytes(enc2)]);

  const txParams = ethereum.Value.fromArray([proofData, auxPublicInputs, externalData, publicInputs, encryptedOutput]);
  const callDataHex =  txParams.toBytes().toHexString();
  const fullHexData = dummyFunctionSig + callDataHex.slice(2);
  return Bytes.fromHexString(fullHexData)
}
