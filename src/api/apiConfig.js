const apiConfig={
    baseUrl:'https://www.themoviedb.org/3/',
    apiKey:'a3cadee2a1c08a3a4d22ded4afacdd26',
    originalImage:(imgPath)=>`https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image:(imgPath)=>`https://image.tmdb.org/t/p/w500/${imgPath}`
}
export default apiConfig