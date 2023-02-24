'use strict'
// #region DECLARATIONS
// Platform Dependencies
const fs = require('fs')
const https = require('https')
// External Dependencies
const gulp = require('gulp')
// Variables
const ROOT_DIRECTORY = '.'
// const TEMP_DIRECTORY = `${ROOT_DIRECTORY}/temp`
const CONTENTS_DIRECTORY = `${ROOT_DIRECTORY}/contents`
const REFERENCES_DIRECTORY = `${CONTENTS_DIRECTORY}/90-references`
// #endregion DECLARATIONS

const downloadAssetsFromAppPlatformRepo = (done) => {
  try {
    const CDN_ROOT_URL = 'https://assets.nbold.io'
    const ASSETS_ROOT_URL = `${CDN_ROOT_URL}/documentation`
    const assets = [
      {
        file_name: 'CHANGELOG.md',
        target_name: '90-changelog.md',
        source: CDN_ROOT_URL,
        destination: REFERENCES_DIRECTORY
      },
      {
        file_name: 'app-data-model-reference.md',
        target_name: '30-application-data-model.md',
        source: ASSETS_ROOT_URL,
        destination: REFERENCES_DIRECTORY
      },
      {
        file_name: 'configuration-reference.md',
        target_name: '20-configuration.md',
        source: ASSETS_ROOT_URL,
        destination: REFERENCES_DIRECTORY
      },
      // {
      //   file_name: 'env-template.md',
      // target_name: '25-configuration.md',
      //   source: ASSETS_ROOT_URL,
      //   destination: REFERENCES_DIRECTORY
      // },
      {
        file_name: 'events-reference.md',
        target_name: '40-events.md',
        source: ASSETS_ROOT_URL,
        destination: REFERENCES_DIRECTORY
      },
      {
        file_name: 'services-reference.md',
        target_name: '10-services.md',
        source: ASSETS_ROOT_URL,
        destination: REFERENCES_DIRECTORY
      }
    ]
    assets.forEach(async (asset, i) => {
      try {
        // const response = fetch(`${asset.source}/${asset.file_name}`)
        // const data = await response.text()
        // fs.writeFileSync(`${asset.destination}/${asset.file_name}`, data)
        // if (i === assets.length - 1) {
        //   done()
        // }
        const file = fs.createWriteStream(`${asset.destination}/${asset.target_name}`)
        https.get(`${asset.source}/${asset.file_name}`, (response) => {
          response.pipe(file)
          if (i === assets.length - 1) {
            done()
          }
        })
      } catch (err) {
        console.error(`Unexpected error in /gulpfile/downloadAssetsFromAppPlatformRepo for asset ${asset.file_name}.`, err)
      }
    })
  } catch (err) { // Unexpected error
    console.error('Unexpected error in /gulpfile/downloadAssetsFromAppPlatformRepo.', err)
    done(err)
  }
}

exports.build = gulp.series(
  downloadAssetsFromAppPlatformRepo
)
