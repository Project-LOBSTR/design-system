import { colors } from '@sf-digital-ui/tokens'
import { getContrast } from 'polished'

export const ColorsGrid = () => {
  return Object.entries(colors).map(([key, color]) => {
    const contrast = getContrast(color, '#fff') < 3.5 ? '#000' : '#fff'

    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: contrast,
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
