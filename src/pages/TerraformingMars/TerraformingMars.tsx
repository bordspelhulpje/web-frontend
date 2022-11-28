import React, { ChangeEventHandler, FunctionComponent, useId } from 'react'
import { useTerraformingMars } from './hooks'
import { Resource } from './types'

export const TerraformingMars: FunctionComponent = () => {
  const id = useId()
  const {
    reset,
    resources,
    victoryPoints,
    victoryPointsChangeHandler,
    incrementVictoryPoints,
    advanceGeneration,
  } = useTerraformingMars()

  return (
    <main className="terraforming-mars">
      <h1>Terraforming Mars</h1>

      <label className="label" htmlFor={`${id}:victory-points`}>
        Victory points:
      </label>
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            className="input"
            id={`${id}:victory-points`}
            type="number"
            value={victoryPoints}
            onChange={victoryPointsChangeHandler}
            min={0}
            max={100}
            step={1}
          />
        </div>
        <div className="control">
          <button
            className="button is-success"
            onClick={incrementVictoryPoints}
          >
            +1
          </button>
        </div>
      </div>

      <h2>Resources</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="column">Resource</th>
            <th scope="column">Production</th>
            <th scope="column">Stock</th>
            <td />
          </tr>
        </thead>

        <tbody>
          <ResourceRow {...resources.money}>Money</ResourceRow>
          <ResourceRow {...resources.tech}>Tech</ResourceRow>
          <ResourceRow {...resources.titanium}>Titanium</ResourceRow>
          <ResourceRow {...resources.plants}>Plants</ResourceRow>
          <ResourceRow {...resources.power}>Power</ResourceRow>
          <ResourceRow {...resources.heat}>Heat</ResourceRow>
        </tbody>
      </table>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-primary" onClick={advanceGeneration}>
            Advance Generation
          </button>
        </div>
        <div className="control">
          <button className="button is-danger" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </main>
  )
}

type ResourceRowProps = {
  children: React.ReactNode
  resource: Resource
  updateProduction: ChangeEventHandler
  min?: number
  max?: number
}

const ResourceRow: FunctionComponent<ResourceRowProps> = ({
  children,
  resource,
  updateProduction,
  min = 0,
  max = 10,
}) => {
  const id = useId()

  return (
    <tr>
      <th scope="row" className="is-vcentered">
        <label htmlFor={id}>{children}</label>
      </th>
      <td>
        <input
          id={id}
          className="input"
          type="number"
          value={resource.production}
          onChange={updateProduction}
          min={min}
          max={max}
          step={1}
        />
      </td>
      <td className="is-vcentered has-text-right">{resource.stock}</td>
      <td className="is-vcentered">
        <button className="button is-primary">Spend</button>
      </td>
    </tr>
  )
}
