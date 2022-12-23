import React, { useRef, useState, useEffect } from 'react'

function ExpStats() {
  const tableRef = useRef()
  const [tableLook, setTableLook] = useState('blur(2px)')

  useEffect(() => {
    const pastTable = tableRef.current.offsetTop * 0.7
    const handleScroll = event => {
      if (window.scrollY > pastTable) {
        setTableLook('blur(0px)')
      }
    }
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="separator-medium" ref={tableRef}></div>
      <h1 className="accentheader">Years of Experience</h1>
      <div className="margin-medium">
        <div className="table-comparator" style={{ filter: tableLook }}>
          <div className="table-comparator-cell">
            <h2 className="table-comparator-text">2 mil</h2>
            Happy customers
          </div>
          <div className="table-comparator-cell">
            <h2 className="table-comparator-text">95%</h2>
            Satisfaction rate
          </div>
          <div className="table-comparator-cell">
            <h2 className="table-comparator-text">8</h2>
            Countries we operate in
          </div>
        </div>
      </div>
    </>
  )
}

export default ExpStats
