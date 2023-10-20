var APP_DATA = {
  "scenes": [
    {
      "id": "0-4th-floor",
      "name": "4th Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05884531464914389,
          "pitch": 0.1660686800869975,
          "rotation": 0,
          "target": "1-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.009661200131819925,
          "pitch": 0.027923757759062084,
          "title": "4th Floor&nbsp;<br>",
          "text": "CSTC 4th Flour College Campus"
        }
      ]
    },
    {
      "id": "1-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1201901584748466,
          "pitch": 0.2573608682469324,
          "rotation": 0,
          "target": "2-hallway"
        },
        {
          "yaw": -3.087168660773063,
          "pitch": 0.08330078113947437,
          "rotation": 0,
          "target": "0-4th-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": 0.7635143695054687,
        "pitch": 0.0046493470665964765,
        "fov": 1.3563401604162861
      },
      "linkHotspots": [
        {
          "yaw": 1.440392330260913,
          "pitch": 0.24199019909987385,
          "rotation": 0,
          "target": "1-hallway"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
