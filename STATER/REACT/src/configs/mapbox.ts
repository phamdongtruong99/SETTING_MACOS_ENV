export const Mapbox = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN || '',
  transformRequest: (url, sourceType) => {
    if (sourceType === 'Tile' && url.startsWith(process.env.REACT_APP_METROMAP_TILES_API as string)) {
      const token = `Bearer ${localStorage.getItem('sessionToken')}`
      return {
        url,
        headers: {
          authorization: token
        }
      }
    }
  }
})
