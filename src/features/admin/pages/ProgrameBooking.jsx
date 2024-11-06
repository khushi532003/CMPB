import React from 'react'
import Table from '../components/Table'

function ProgrameBooking() {
  return (
    <div>
      <div class=" flex items-center justify-between pb-6">
        <div>
          <h3 class="text-gray-600 font-semibold text-3xl">Programme Booked</h3>
        </div>
      </div>
      <Table id={'S.N0.'} memeberName={"Member Name"} memberId={"Member ID"} Membership={"Membership"} price={"Amount Paid"} dateTime={"Date & Time"} abc={"nsdkjs"} identifier={"bookProgram"} />
    </div>
  )
}

export default ProgrameBooking
