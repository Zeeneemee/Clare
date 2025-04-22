const Pagination = ({current})=>{
    const pageNumber = [1,2,3]
    return(
   <div className="flex justify-center gap-3 mt-6 md:mt-8">
        {pageNumber.map((number,index) => (
            <div className={`w-20 md:w-24 h-1 ${current === number ? `bg-[#003366]` :  `bg-gray-300`} rounded-full`}></div>
            )
        )
    }
    </div>
    )
}

export default Pagination