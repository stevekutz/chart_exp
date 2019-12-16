import React from 'react'
//
// import useChartConfig from 'hooks/useChartConfig'
// import Box from 'components/Box'
// import SyntaxHighlighter from 'components/SyntaxHighlighter'
import { Chart } from 'react-charts'
// let sourceCode
export default () => {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 4], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
    //   {
    //     label: 'Series 2',
    //     data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
    //   }
    ],
    []
  )
  const series = React.useMemo(
    () => ({
      type: 'bar'
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { position: 'left', type: 'linear', stacked: false }
    ],
    []
  )
  return (
    <>

        <Chart data={data} series={series} axes={axes} tooltip />

    </>
  )
}