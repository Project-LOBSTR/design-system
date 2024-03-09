import { dropShadow } from '@lobstr/tokens'

export const DropShadowGrid = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '10px',
      }}
    >
      {Object.entries(dropShadow).map(([key, value]) => {
        return (
          <div key={key}>
            <h3 style={{ fontFamily: 'sans-serif' }}>{key}</h3>
            <div
              style={{
                backgroundColor: 'white',
                padding: '10px',
                width: '100px',
                borderRadius: '8px',
                height: '100px',
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                boxShadow: value,
              }}
            />
          </div>
        )
      })}
    </div>
  )
}
