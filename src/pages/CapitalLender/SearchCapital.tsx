import React from 'react'

const SearchCapital = () => {
  return (
    <div className='pb-8'>
      <form action="https://api.web3forms.com/submit" className="mt-10">
        <input type="hidden" name="access_key" defaultValue="YOUR_ACCESS_KEY_HERE" />
        <div className="grid gap-6 sm:grid-cols-5">
          <div className="relative z-0">
            <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Tên người góp vốn:</label>
          </div>
          <div className="relative z-0">
            <input type="text" name="date" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Từ Ngày:</label>
          </div>
          <div className="relative z-0">
            <input type="text" name="date" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Đến ngày:</label>
          </div>

          <div className="relative">
            <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
              <option>Trạng thái</option>
              <option>Đang vay</option>
              <option>Đã vay</option>
              <option>Nợ Xấu</option>
            </select>
          </div>

          <button type="submit" className="mt-3 w-20 h-8 rounded-md bg-orange-600 text-white">Tìm Kiếm</button>
        </div>

      </form>
    </div>
  )
}

export default SearchCapital