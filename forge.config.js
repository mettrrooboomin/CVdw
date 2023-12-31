module.exports = {
    electronPackagerConfig: {
        "name": "deeptest",
        "icon": "./ui/favicon.ico"
    },
    packagerConfig: {
        "name": "deeptest",
        "icon": "./icon/favicon",
        extraResource: [
            './bin',
            './ui',
            './lang',
        ]
    },
    makers: [
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                name: 'deeptest'
            }
        },
        {
            name: '@electron-forge/maker-zip',
            platforms: [
                'darwin'
            ]
        },
        {
            name: '@electron-forge/maker-deb',
            config: {}
        },
        {
            name: '@electron-forge/maker-rpm',
            config: {}
        }
    ],
    plugins: [
        /*{
            'name': '@electron-forge/plugin-webpack',
            'config': {
                mainConfig: './webpack.main.config.js',
                renderer: {
                    config: './webpack.renderer.config.js',
                    entryPoints: [
                        // {
                        //   html: './src/index.html',
                        //   js: './src/renderer.js',
                        //   name: 'main_window'
                        // }
                    ]
                }
            }
        },
        {
            'name': '@timfish/forge-externals-plugin',
            'config': {
                "externals": ["@electron/remote"],
                "includeDeps": true
            }
        } */
        [
            "@electron-forge/plugin-webpack",
            {
                mainConfig: './webpack.main.config.js',
                renderer: {
                    config: './webpack.renderer.config.js',
                    entryPoints: [
                        // {
                        //   html: './src/index.html',
                        //   js: './src/renderer.js',
                        //   name: 'main_window'
                        // }
                    ]
                }
            }
        ],
        [
            "@timfish/forge-externals-plugin",
            {
                "externals": ["@electron/remote"],
                "includeDeps": true
            }
        ]

    ]
}
