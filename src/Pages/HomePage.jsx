import React from 'react'
import HomePageHeader from '../Components/HomePageHeader'
import HomePageMain from '../Components/HomePageMain'
import HomePageQuestions from '../Components/HomePageQuestions'
import HomePageFooter from '../Components/HomePageFooter'

const HomePage = () => {
  return (
    <>
      <HomePageHeader />
      <HomePageMain />
      <HomePageQuestions />
      <HomePageFooter />
    </>
  )
}

export default HomePage