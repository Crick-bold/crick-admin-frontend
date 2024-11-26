export const batsmanTableColumns = [
  {
    key: 'index',
    Header: ' ',
    accessor: ''
  },
  {
    key: 'name',
    header: 'Batsman',
    accessor: 'name'
  },
  {
    key: 'match',
    header: 'Matches',
    accessor: 'match'

  },
  {
    key: 'runs',
    header: 'Runs',
    accessor: 'runs'
  }
]

export const bowlerTableColumns = [
  {
    key: 'index',
    Header: ' ',
    accessor: ''
  },
  {
    key: 'name',
    header: 'Name',
    accessor: 'name'
  },
  {
    key: 'wickets',
    header: 'Wickets',
    accessor: 'wickets'
  }
]
export const highestRunsColumns = [
  {
    key: 'index',
    Header: ' ',
    accessor: ''
  },
  {
    key: 'name',
    header: 'Name',
    accessor: 'name'
  },
  {
    key: 'runs',
    header: 'Runs',
    accessor: (row) => {
      return `${row.runs}runs`
    }
  }

]

export const bestBowlingColumns = [
  {
    key: 'index',
    header: ' ',
    accessor: ' '
  },
  {
    key: 'name',
    header: 'Name',
    accessor: 'name'
  },
  {
    key: 'o',
    header: 'O',
    accessor: 'o'
  },
  {
    key: 'eco',
    header: 'Eco',
    accessor: 'eco'
  },
  {
    key: 'bb',
    header: 'BB',
    accessor: 'bb'
  }

]
export const battingAverageColumns = [
  {
    key: 'index',
    header: '',
    accessor: ''
  },
  {
    key: 'name',
    header: 'Name',
    accessor: 'name'

  },
  {
    key: 'm',
    header: 'M',
    accessor: 'm'
  },
  {
    key: 'runs',
    header: 'Runs',
    accessor: 'runs'
  },
  {
    key: 'avg',
    header: 'Avg',
    accessor: 'avg'
  }

]

export const bowlingAverageColumns = [
  {
    key: 'index',
    header: '',
    accessor: ''
  },
  {
    key: 'name',
    header: 'Name',
    accessor: 'name'
  },
  {
    key: 'm',
    header: 'M',
    accessor: 'm'
  },
  {
    key: 'w',
    header: 'W',
    accessor: 'w'
  },
  {
    key: 'avg',
    header: 'Avg',
    accessor: 'avg'
  }

]

export const mostHundredColumns = [
  {
    key: 'index',
    header: '',
    accessor: ''
  },
  {
    key: 'name',
    header: 'Name',
    accessor: 'name'
  },
  {
    key: 'm',
    header: 'M',
    accessor: 'm'
  },
  {
    key: 'runs',
    header: 'Runs',
    accessor: 'runs'
  },
  {
    key: '100s',
    header: '100s',
    accessor: '100s'
  }

]
export const mostfiftiesColumns = [
  {
    key: 'index',
    header: '',
    accessor: ''
  },
  {
    key: 'name',
    header: 'Name',
    accessor: 'name'
  },
  {
    key: 'm',
    header: 'M',
    accessor: 'm'
  },
  {
    key: 'runs',
    header: 'Runs',
    accessor: 'runs'
  },
  {
    key: '100s',
    header: '100s',
    accessor: '100s'
  }

]
