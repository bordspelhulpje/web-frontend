import { Resource, Resources } from './types'

const simpleAdvancer = (resource: Resource) => ({
  ...resource,
  stock: resource.stock + resource.production,
})

const advancers = {
  money: (money: Resource, victoryPoints: number) => ({
    ...money,
    stock: money.stock + money.production + victoryPoints,
  }),
  tech: simpleAdvancer,
  titanium: simpleAdvancer,
  plants: simpleAdvancer,
  power: (power: Resource) => ({
    ...power,
    stock: power.production,
  }),
  heat: (heat: Resource, power: Resource) => ({
    ...heat,
    stock: heat.stock + heat.production + power.stock,
  }),
}

export const computeNextGeneration =
  (victoryPoints: number) => (resources: Resources) => ({
    money: advancers.money(resources.money, victoryPoints),
    tech: advancers.tech(resources.tech),
    titanium: advancers.titanium(resources.titanium),
    plants: advancers.titanium(resources.plants),
    power: advancers.power(resources.power),
    heat: advancers.heat(resources.heat, resources.power),
  })
