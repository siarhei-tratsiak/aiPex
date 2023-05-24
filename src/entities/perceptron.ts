export class Perceptron {
  private learningRate: number
  private threshold: number
  private weights: number[]

  constructor(numInputs: number, learningRate: number) {
    this.weights = new Array(numInputs)
    this.learningRate = learningRate
    this.threshold = 0

    // initialize weights to small random values between -1 and 1
    for (let i = 0; i < numInputs; i++) {
      this.weights[i] = Math.random() * 2 - 1
    }
  }

  // predict the output given an input
  predict(inputs: number[]) {
    let sum = 0

    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i]
    }

    return sum >= this.threshold ? 1 : 0
  }

  // train the perceptron on a dataset
  train(dataset: { inputs: number[]; output: number }[]) {
    let error = 1

    while (error > 0) {
      error = 0
      for (let i = 0; i < dataset.length; i++) {
        const inputs = dataset[i].inputs
        const target = dataset[i].output
        const prediction = this.predict(inputs)
        const delta = target - prediction

        // update weights based on error
        for (let j = 0; j < this.weights.length; j++) {
          this.weights[j] += this.learningRate * delta * inputs[j]
        }

        // update threshold based on error
        this.threshold -= this.learningRate * delta

        error += delta * delta
      }
    }
  }
}
