export type Resources = {
  readonly money: Resource
  readonly tech: Resource
  readonly titanium: Resource
  readonly plants: Resource
  readonly power: Resource
  readonly heat: Resource
}

export type Resource = {
  readonly production: number
  readonly stock: number
}
