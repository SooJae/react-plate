import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as myGitHub from 'modules/my-github'

const MyGitHubContainer = () => {
  const { isLoading, contents } = useSelector(state => state[myGitHub.TYPE])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(myGitHub.fetch())
  }, [dispatch])

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <div>
        <span>NAME: </span>
        {contents.login}
      </div>
      <div>
        <span>URL: </span>
        {contents.html_url}
      </div>
      <div>
        <span>BLOG: </span>
        {contents.blog}
      </div>
      <img src={contents.avatar_url} alt="profile_image" />
    </div>
  )
}

export default MyGitHubContainer
