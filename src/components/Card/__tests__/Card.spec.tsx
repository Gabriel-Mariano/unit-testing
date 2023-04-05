import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Card } from '../index'

describe("Card Component", ()=> {
    it("should render correctly", ()=> {
        render(
            <Card 
                albumId={1} 
                title={'any title'} 
                thumbnailUrl={'https://via.placeholder.com/150/24f355'} 
                id={'1'}
            />
        )
    })
})