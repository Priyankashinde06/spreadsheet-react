export const Header = () => {

  return (
    <>
    <header className="w-full flex justify-between items-center px-4 py-2 bg-white border-b-2 border-gray-200 text-sm">
      {/* Left Section: Breadcrumb */}
      <div className="font-semibold flex items-center gap-2">
        <img alt="Sidebar Icon" className="px-2" src="data:image/svg+xml,%3csvg%20width='20'%20height='16'%20viewBox='0%200%2020%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.75%200C18.5449%200%2020%201.45507%2020%203.25V12.75C20%2014.5449%2018.5449%2016%2016.75%2016H3.25C1.45507%2016%200%2014.5449%200%2012.75V3.25C0%201.45507%201.45507%200%203.25%200H16.75ZM3.25%201.5C2.2835%201.5%201.5%202.2835%201.5%203.25V12.75C1.5%2013.7165%202.2835%2014.5%203.25%2014.5H12.5V1.5H3.25Z'%20fill='%23618666'/%3e%3c/svg%3e" />
        <span className="text-[#afafaf] cursor-pointer hover:underline">WorkSpace</span>
        <span className="text-[#afafaf]">&gt;</span>
        <span className="text-[#afafaf] cursor-pointer hover:underline">Folder 2</span>
        <span className="text-[#afafaf]">&gt;</span><span className="cursor-pointer hover:underline">Spreadsheet 3</span>
        <span className="text-[#afafaf] text-lg tracking-wider -translate-1" style={{ lineHeight: 1, marginTop: -7 }}>...</span></div>

      {/* Right Section: Search, Bell, Profile */}
      <div className="flex items-center gap-2 pr-3">
        <div className="bg-[#F6F6F6] flex items-center gap-2 p-2.5 rounded-lg text-gray-500 w-[150px]">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
          <input placeholder="Search within sheet" className="text-xs bg-transparent outline-none placeholder:text-gray-400 w-[105px]" type="text" />
          </div>
        <img alt="Notifications" className="cursor-pointer" src="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='40'%20height='40'%20rx='8'%20fill='white'/%3e%3cpath%20d='M19.9999%209.99622C24.0498%209.99622%2027.3565%2013.191%2027.4957%2017.2453L27.4999%2017.4962V21.5932L28.8799%2024.7492C28.9489%2024.9071%2028.9846%2025.0776%2028.9846%2025.25C28.9846%2025.9404%2028.4249%2026.5%2027.7346%2026.5L22.9999%2026.5015C22.9999%2028.1583%2021.6567%2029.5015%2019.9999%2029.5015C18.4022%2029.5015%2017.0962%2028.2526%2017.005%2026.6778L16.9994%2026.4992L12.2747%2026.5C12.1034%2026.5%2011.9339%2026.4648%2011.7767%2026.3965C11.1435%2026.1215%2010.8532%2025.3852%2011.1282%2024.752L12.4999%2021.5941V17.4961C12.5005%2013.3413%2015.852%209.99622%2019.9999%209.99622ZM21.4994%2026.4992L18.4999%2026.5015C18.4999%2027.3299%2019.1714%2028.0015%2019.9999%2028.0015C20.7796%2028.0015%2021.4203%2027.4066%2021.493%2026.646L21.4994%2026.4992ZM19.9999%2011.4962C16.6797%2011.4962%2014.0003%2014.1705%2013.9999%2017.4962V21.9059L12.6559%2025H27.3524L25.9999%2021.9068L26%2017.5091L25.9962%2017.2839C25.8852%2014.0504%2023.2414%2011.4962%2019.9999%2011.4962Z'%20fill='%23121212'/%3e%3crect%20x='21'%20y='1'%20width='18'%20height='18'%20rx='9'%20fill='%234B6A4F'/%3e%3crect%20x='21'%20y='1'%20width='18'%20height='18'%20rx='9'%20stroke='white'%20stroke-width='2'/%3e%3cpath%20d='M27.7%2013V12.22C28.3333%2011.7667%2028.8633%2011.3667%2029.29%2011.02C29.7233%2010.6733%2030.07%2010.3533%2030.33%2010.06C30.59%209.76667%2030.7767%209.49%2030.89%209.23C31.01%208.96333%2031.07%208.69333%2031.07%208.42C31.07%208.06667%2030.96%207.78%2030.74%207.56C30.52%207.34%2030.2133%207.23%2029.82%207.23C29.4067%207.23%2029.0767%207.37%2028.83%207.65C28.59%207.92333%2028.4533%208.3%2028.42%208.78L27.49%208.35C27.5367%207.93%2027.66%207.56667%2027.86%207.26C28.06%206.95333%2028.33%206.71667%2028.67%206.55C29.0167%206.38333%2029.4167%206.3%2029.87%206.3C30.2433%206.3%2030.57%206.35333%2030.85%206.46C31.1367%206.56667%2031.3767%206.71667%2031.57%206.91C31.7633%207.09667%2031.91%207.31667%2032.01%207.57C32.1167%207.82333%2032.17%208.09333%2032.17%208.38C32.17%208.8%2032.0667%209.20667%2031.86%209.6C31.6533%209.98667%2031.3267%2010.3833%2030.88%2010.79C30.4333%2011.1967%2029.8467%2011.6333%2029.12%2012.1V12.12C29.2%2012.1067%2029.31%2012.1%2029.45%2012.1C29.59%2012.0933%2029.73%2012.09%2029.87%2012.09C30.01%2012.0833%2030.1233%2012.08%2030.21%2012.08H32.29V13H27.7Z'%20fill='%23F6F6F6'/%3e%3c/svg%3e" />
        <img alt="Profile" className="w-8 h-8 bg-gray-300 rounded-full cursor-pointer" src="/John_Doe-DgWeQNAo.svg" />
        <div className="flex flex-col leading-tight cursor-pointer">
          <div className="text-xs">John Doe</div>
          <div className="text-[#afafaf] text-[10px]">john.doe...</div></div>
      </div>
    </header>
    </>
  );
};