import { useRef } from 'react'
import { IMaskInput } from 'react-imask'

const Input = () => {
  const ref = useRef(null)
  const inputRef = useRef(null)

  return (
    <IMaskInput
      mask={Number}
      radix="."
      value="123"
      scale={2}
      unmask={true} // true|false|'typed'
      ref={ref}
      inputRef={inputRef} // access to nested input
      // DO NOT USE onChange TO HANDLE CHANGES!
      // USE onAccept INSTEAD
      onAccept={
        // depending on prop above first argument is
        // `value` if `unmask=false`,
        // `unmaskedValue` if `unmask=true`,
        // `typedValue` if `unmask='typed'`
        (value) => console.log(value)
      }
      onKeyDown={(e) => {
        const ignoreCharacter = ['-', '+', 'e']
        if (ignoreCharacter.includes(e.key)) {
          e.preventDefault()
        }
      }}
      // ...and more mask props in a guide

      // input props also available
      placeholder="Enter number here"
      type="number"
      // min={0}
      max={1000}
    />
  )
}

export default Input
