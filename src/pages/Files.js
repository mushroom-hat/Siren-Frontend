import React from 'react'

export const Files = () => {
  return (
    <div className="bg-primary min-h-screen flex">
    <SideBar />
    <MainDisplay>
        {children}
    </MainDisplay>
    </div>
  )
}
