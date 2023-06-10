export default Object.freeze({
  Cell: {
    components: { CellDrawer: null }
  },
  Creature: {
    components: {
      CreatureDrawer: null,
      GrowManager: {
        cyclesToUpdate: 1
      },
      ReproductionManager: { cyclesToUpdate: 5 }
    }
  },
  cycle: {
    length: 500
  },
  field: {
    width: 20,
    height: 10
  },
  population: {
    count: 1
  }
})
