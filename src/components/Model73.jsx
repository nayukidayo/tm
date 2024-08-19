import Model from './Model'

export default function Model73({ setModel }) {
  const getRemoteModel = async url => {
    const model = speechCommands.create(
      'BROWSER_FFT',
      undefined,
      url + 'model.json',
      url + 'metadata.json'
    )
    await model.ensureModelLoaded()
    return model
  }

  const getLocalModel = obj => {
    throw new Error('Not implemented')
    // TODO: speechCommands
    // https://github.com/tensorflow/tfjs/blob/master/tfjs-core/src/io/browser_files.ts#L138
    // model = await tfl.loadLayersModel(tf.io.fromMemory(
    //   this.modelArtifactsOrURL.modelTopology,
    //   this.modelArtifactsOrURL.weightSpecs,
    //   this.modelArtifactsOrURL.weightData));
  }

  return (
    <Model
      getRemoteModel={getRemoteModel}
      getLocalModel={getLocalModel}
      setModel={setModel}
      defaultUri="iOrzLLpOl"
    />
  )
}
