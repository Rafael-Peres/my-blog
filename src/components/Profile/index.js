import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from "../Avatar"
import * as S from "./styled"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          description
          position
        }
      }
    }
  `)
  return (
    <S.ProfileWrapper>
      <S.ProfileLink>
        <Avatar />
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>
        {description}
        <S.SocialLink
          href="https://willianjusten.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Willian Justen
        </S.SocialLink>
      </S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile
