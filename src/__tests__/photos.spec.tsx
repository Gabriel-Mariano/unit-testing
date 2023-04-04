import { render, waitFor } from '@testing-library/react'
import "@testing-library/jest-dom"
import Photos from '@src/pages/photos'
import { DataPhotos, listPhotos } from '@src/services/photos'

describe("Page Photo", ()=> {
    it("should render correctly", async ()=> {
        const dataMock = [
            {
                albumId: 1,
                id: 3,
                title: "officia porro iure quia iusto qui ipsa ut modi",
                url: "https://via.placeholder.com/600/24f355",
                thumbnailUrl: "https://via.placeholder.com/150/24f355"
            }
        ]

       global.fetch = jest.fn().mockResolvedValue({
        json:() =>
            Promise.resolve<DataPhotos[]>(dataMock)
       })

        render(<Photos />)

        waitFor(()=> expect(listPhotos).toHaveBeenCalled())

    })
})