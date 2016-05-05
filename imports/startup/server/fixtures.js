import { Meteor } from 'meteor/meteor';

import { Games } from '../../api/games/games.js';
import { Developers } from '../../api/developers/developers.js';

Meteor.startup(() => {
  if (Developers.find().count === 0) {
    const data = [
      {
        name: 'Edmund McMillen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        name: 'Supergiant Games',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        name: 'Spearhead Games',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        name: 'Acid Nerve',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        name: 'Klei Entretainment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        name: 'Team Meat',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      }
    ];

    const contactInfo = {
      twitter: 'cdiezm_',
      facebook: 'carlos.diez.39794',
      mail: 'cdiezmoran@gmail.com',
      address: 'Mexico'
    }

    data.forEach((developer) => {
      Developers.insert({
        name: developer.name,
        description: developer.description,
        contactInfo: contactInfo
      });
    });
  }
  if (Games.find().count === 0) {
    const data = [
      {
        name: 'Ori and the Blind Forest',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'new',
          'game',
          'test',
          'action',
          'adventure'
        ],
        rating: 0,
        img: 'https://i.ytimg.com/vi/cklw-Yu3moE/maxresdefault.jpg',
        views: 1
      },
      {
        name: 'Gigantic',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'new',
          'game',
          'test',
          'action',
          'adventure'
        ],
        rating: 0,
        img: 'http://cdn.mmohuts.com/wp-content/uploads/2015/03/Gigantic_604x423.jpg',
        views: 2
      },
      {
        name: 'SkySaga',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'new',
          'game',
          'test',
          'action',
          'adventure'
        ],
        rating: 0,
        img: 'http://cdn.mmohuts.com/wp-content/uploads/2015/03/Skysaga_604x423.jpg',
        views: 3
      },
      {
        name: 'Elsword',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'new',
          'game',
          'test',
          'action',
          'adventure'
        ],
        rating: 0,
        img: 'http://cdn.mmohuts.com/wp-content/uploads/2015/03/Elsword_Online_604x423.jpg',
        views: 4
      },
      {
        name: 'Super Meatboy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'new',
          'game',
          'test',
          'action',
          'adventure'
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/40800/header.jpg?t=1447352515',
        views: 5
      },
      {
        name: 'Don\'t Starve',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'new',
          'game',
          'test',
          'action',
          'adventure'
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/219740/header.jpg?t=1459492015',
        views: 6
      },
      {
        name: 'Titan Souls',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'new',
          'game',
          'test',
          'action',
          'adventure'
        ],
        rating: 0,
        img: 'https://metrouk2.files.wordpress.com/2015/04/titan_souls_-_key_art.jpg',
        views: 7
      },
      {
        name: 'Stories: The Path of Destinies',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'new',
          'game',
          'test',
          'action',
          'adventure'
        ],
        rating: 0,
        img: 'http://vignette1.wikia.nocookie.net/stories-the-hidden-path/images/f/ff/Illustration_Final_Horizontal.jpg/revision/latest?cb=20160122183941',
        views: 8
      },
      {
        name: 'Bastion',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'new',
          'game',
          'test',
          'action',
          'adventure'
        ],
        rating: 0,
        img: 'http://thekoalition.com/images/2015/04/bastion-730x411.jpg',
        views: 9
      },
      {
        name: 'The Binding of Isaac',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'new',
          'game',
          'test',
          'action',
          'adventure'
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/113200/header.jpg?t=1447354527',
        views: 10
      }
    ];

    const sysRequirements = {
      operatingSystem: '64-bit Windows 7, 64-bit Windows 8 (8.1) or 64-bit Windows 10',
      processor: 'Intel CPU Core i3-2500K 2.0GHz+ / AMD CPU Phenom II 570',
      memory: '4 GB RAM',
      graphics: 'GeForce 8800 GTX, GT640, GT730, Radeon HD 5850, HD Graphics 530',
      storage: '2 GB available space',
      directX: 'Version 10',
      soundCard: 'Stereo',
      aditionalNotes: 'These specs are just for testing.'
    };

    data.forEach((game) => {
      Games.insert({
        name: game.name,
        description: game.description,
        createdAt: game.createdAt,
        releaseDate: game.releaseDate,
        genre: game.genre,
        rating: game.rating,
        img: game.img,
        views: game.views,
        minSysRequirements: sysRequirements
      });
    });
  }
});
