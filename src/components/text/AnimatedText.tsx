import React, { FC } from 'react'
import styles from './AnimatedText.module.scss'
import LetterFromTheBottom from './LetterFromTheBottom'

type Props = {
  text: string
  className?: string
}

const AnimatedText: FC<Props> = ({ text, className }) => {
  const arrayOfWord: Array<string> = text.split(' ')
  const matrixOfText: Array<Array<string>> = arrayOfWord.map((e) => e.split(''))

  let globalIndex = 0

  return (
    <div className={className}>
      {matrixOfText.map((word, index) => {
        return (
          <div className={styles.rowLetterContainer} key={`${index}_key`}>
            {word.map((letter) => {
              globalIndex++
              return (
                <LetterFromTheBottom
                  key={`${globalIndex}_letter`}
                  letterIndex={globalIndex}
                  className={styles.independentLetter}
                >
                  {letter === ' ' ? <>&nbsp;</> : <>{letter}</>}
                </LetterFromTheBottom>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default AnimatedText
