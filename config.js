var config = {
    //style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZGlhbml0YTk1NiIsImEiOiJjbTQ5OG95Nm8wN20xMmlvaGxoZnE0eWRsIn0.CZx1w2Kr7i9b8yJSok0hvg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    //title: 'Your Title Goes Here',
    //subtitle: 'The Storytelling Template helps you create an awesome animated map story with ease.',
    //byline: 'By a I.M. Amapper',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        
        {
            id: 'first-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Karnes County, Texas',
            image: '',
            description: 'En el condad de Carnes. \nmiren lo que ha sucedido,\nmurió el Cherife Mayor. \nquednado Roman herido', //description is the stanza
            description2: 'In the county of Karnes, \nLook what has happened; \nThe Major Sheriff died, \nLeaving Román badly wounded.',
            location: {
                center: [-97.906893, 28.8791858], //center is the geometry longitude and latitude
                zoom: 8, //South East/South Central/ South Texas areas map starting point
                pitch: 0,
                bearing: 0
            },
            audio:'/audio/Tejeda_Greg_Cortez.mp3',
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Gonzales County, Texas',
            image: '',
            description: 'Tiró con rumbo a Gonzales \nsin ninguna timidez:\n--Síganme rinches cobardes, \nyo soy Gregorio Cortez.',
            description2: '',
            articleImg: '',
            audioMPG:'',
            location: {
                center: [-97.5, 29.5],
                zoom: 10,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Belmont, Gonzalez County, Texas',
            image: '',
            description: 'Se fue de Belmont al rancho, \nlo alacanzaron a rodear, \npoquitos más de trescientos, \ny allí les brincó el corral.',
            description2: ' ',
            articleImg: '',
            audioMPG:'',
            location: {
                center: [-97.6875125, 29.5241066],
                zoom: 13,
                pitch: 8,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Laredo, Texas',
            image: '',
            description: 'Salió Gregorio Cortez, \nsalió con rumbo a Laredo, \nno lo quisieron seguir \nporque le tuvieron miedo.',
            description2: '',
            articleImg: '',
            audioMPG:'',
            location: {
                center: [-99.41,
                    27.5075005],
                zoom: 8,
                pitch: 8,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'El Encinal, Texas',
            image: '',
            description: 'Allá por El Encinal, \nsegún lo que aquí se dice, \nle formaron un corral y les mató otro cherife.',
            description2: '',
            articleImg: '',
            audioMPG:'',
            location: {
                center: [-99.3552096, 28.0406329],
                zoom: 10,
                pitch: 8,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
