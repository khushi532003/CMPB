import React, { useEffect, useState } from 'react'
import Table from '../components/Table'
import { GoPlus } from 'react-icons/go'
import AddLinkForm from '../components/AddLinkForm'
import { useChurayeHuePalContext } from '@/AdminContext'
import { useAuthContext } from '@/context'

function ChurayeHuePal() {
  const [addLink, setAddLink] = useState(false)

  const { GetVideo, video } = useChurayeHuePalContext()
  const { token } = useAuthContext()


  useEffect(() => {
    if (token)
      GetVideo()
  }, [token])

  return (
    <div>
      <div className=" flex items-center justify-between pb-6">
        <div>
          <h3 className="text-gray-600 font-semibold text-3xl"> Churaye Hue Pal</h3>
        </div>
        <div onClick={() => setAddLink(true)} className="px-4 py-1 text-white bg-RedTheme flex gap-1 items-center rounded-sm cursor-pointer"><GoPlus /> Add Link</div>
      </div>
      <Table id={"S.no"} link={"Video Link"} action={"Action"} data={video} identifier={"video"} />

      {addLink ? <AddLinkForm onClose={() => setAddLink(false)} /> : ""}
    </div>
  )
}

export default ChurayeHuePal;
