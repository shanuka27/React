import React from 'react'

function MemoComponent() {
    console.log('Memo render')
  return (
    <div>
        {/* {this.state.first} */}
    </div>
  )
}

export default React.memo(MemoComponent)