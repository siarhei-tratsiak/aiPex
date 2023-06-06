export default Object.freeze({
  Cell: {
    components: { CellDrawer: null }
  },
  Creature: {
    components: {
      CreatureDrawer: null,
      GrowManager: {
        updatesPerCycle: 1
      },
      ReproductionManager: { updatesPerCycle: 0.2 }
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
