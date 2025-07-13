import React from 'react'

type Row = {
  request: string
  submitted: string
  status: 'In-process' | 'Need to start' | 'Complete' | 'Blocked'
  submitter: string
  url: string
  assigned: string
  priority: 'High' | 'Medium' | 'Low'
  dueDate: string
  estValue: string
}

const data: Row[] = [
  {
    request: 'Launch social media campaign for pro...',
    submitted: '15-11-2024',
    status: 'In-process',
    submitter: 'Aisha Patel',
    url: 'www.aishapatel.c...',
    assigned: 'Sophie Choudhury',
    priority: 'Medium',
    dueDate: '20-11-2024',
    estValue: '6,200,000 ₹',
  },
  {
    request: 'Update press kit for company redesign',
    submitted: '28-10-2024',
    status: 'Need to start',
    submitter: 'Irfan Khan',
    url: 'www.irfankhan.c...',
    assigned: 'Tejas Pandey',
    priority: 'High',
    dueDate: '30-10-2024',
    estValue: '3,500,000 ₹',
  },
  {
    request: 'Finalize user testing feedback for appli...',
    submitted: '05-12-2024',
    status: 'In-process',
    submitter: 'Mark Johnson',
    url: 'www.markjohnso...',
    assigned: 'Rachel Lee',
    priority: 'Medium',
    dueDate: '10-12-2024',
    estValue: '4,750,000 ₹',
  },
  {
    request: 'Design financial report for Q4',
    submitted: '10-01-2025',
    status: 'Complete',
    submitter: 'Emily Green',
    url: 'www.emilygreen...',
    assigned: 'Tom Wright',
    priority: 'Low',
    dueDate: '15-01-2025',
    estValue: '5,900,000 ₹',
  },
  {
    request: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrow...',
    assigned: 'Kevin Smith',
    priority: 'Low',
    dueDate: '30-01-2025',
    estValue: '2,800,000 ₹',
  },
]

const statusColor = {
  'In-process': 'bg-yellow-100 text-yellow-700',
  'Need to start': 'bg-gray-100 text-gray-600',
  'Complete': 'bg-green-100 text-green-700',
  'Blocked': 'bg-red-100 text-red-600',
}

const priorityColor = {
  'High': 'text-red-600',
  'Medium': 'text-yellow-600',
  'Low': 'text-blue-600',
}

export default function App() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-white rounded shadow overflow-x-auto border">
        <table className="min-w-full text-sm table-fixed">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="w-8 px-2 py-2 border-r">#</th>
              <th className="w-72 px-2 py-2 border-r">Job Request</th>
              <th className="w-32 px-2 py-2 border-r">Submitted</th>
              <th className="w-40 px-2 py-2 border-r">Status</th>
              <th className="w-40 px-2 py-2 border-r">Submitter</th>
              <th className="w-44 px-2 py-2 border-r">URL</th>
              <th className="w-44 px-2 py-2 border-r">Assigned</th>
              <th className="w-24 px-2 py-2 border-r">Priority</th>
              <th className="w-32 px-2 py-2 border-r">Due Date</th>
              <th className="w-32 px-2 py-2">Est. Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-t">
                <td className="px-2 py-2 border-r">{i + 1}</td>
                <td className="px-2 py-2 border-r">{row.request}</td>
                <td className="px-2 py-2 border-r">{row.submitted}</td>
                <td className="px-2 py-2 border-r">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColor[row.status]}`}>
                    {row.status}
                  </span>
                </td>
                <td className="px-2 py-2 border-r">{row.submitter}</td>
                <td className="px-2 py-2 border-r text-blue-800 underline">{row.url}</td>
                <td className="px-2 py-2 border-r">{row.assigned}</td>
                <td className={`px-2 py-2 border-r font-semibold ${priorityColor[row.priority]}`}>
                  {row.priority}
                </td>
                <td className="px-2 py-2 border-r">{row.dueDate}</td>
                <td className="px-2 py-2">{row.estValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Tabs */}
      <div className="flex mt-4 space-x-4 text-sm">
        {['All Orders', 'Pending', 'Reviewed', 'Arrived', '+'].map((label, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-t ${label === 'All Orders' ? 'bg-gray-200 border-t-2 border-l-2 border-r-2 border-gray-300 font-semibold' : 'text-gray-600'}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
