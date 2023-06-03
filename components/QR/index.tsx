import React, { useEffect } from 'react'
import QRCode from 'react-qr-code'

import * as UI from './style'
import { useGameInitStore } from './useQRStore'

const QR = () => {
  const { code } = useGameInitStore((state) => ({ code: state.code }))

  useEffect(() => {
    console.log(code)
  }, [code])
  return (
    <UI.QRContainer>
      <QRCode size={512} style={{ height: 'auto', maxWidth: '70%', width: '70%' }} value={'/'} viewBox={`0 0 512 512`} />
    </UI.QRContainer>
  )
}

export default QR
