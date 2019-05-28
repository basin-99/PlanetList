export const getPlanetId = (url) => {
    let path = url.split("https://swapi.co/api/planets/");
    return path[1].split('/')[0];
}