import * as React from "react"
import styled from "styled-components"
import { useGetMe } from "@/features/auth"
import { ObjectiveList } from "@/features/objective"
import { Main } from "@/layouts"

type Props = {}

export const Root = (_props: Props) => {
  const { me } = useGetMe()
  if (!me) throw new Error("401")

  return (
    <Main>
      <Wrap>
        <h1>{`${me.name}'s objective list`}</h1>
        <ObjectiveList />
      </Wrap>
    </Main>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`
