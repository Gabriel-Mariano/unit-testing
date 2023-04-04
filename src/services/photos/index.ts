export type DataPhotos = {
    albumId:number,
    id?:number,
    title:string,
    url?:string,
    thumbnailUrl:string
} 

export const listPhotos = async ():Promise<DataPhotos[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos') as Response;

    const jsonData = await response.json();
    
    return jsonData; 
}

export const photoDetails = async (id_photo:string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id_photo}`)

    const jsonData = await response.json();
    
    return jsonData; 
}