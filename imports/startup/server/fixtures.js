import { Meteor } from 'meteor/meteor';

import { Games } from '../../api/games/games.js';
import { Developers } from '../../api/developers/developers.js';

Meteor.startup(() => {
  if (Developers.find().count() === 0) {
    const devData = [
      {
        _id: 'edmcdev',
        name: 'Edmund McMillen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'sugadev',
        name: 'Supergiant Games',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'spgadev',
        name: 'Spearhead Games',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'acnedev',
        name: 'Acid Nerve',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'klendev',
        name: 'Klei Entretainment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'temedev',
        name: 'Team Meat',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'mostgmdev',
        name: 'Moon Studios GmBH',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'modev',
        name: 'Motiga',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'stwidev',
        name: 'Studio Wildcard',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'gesodev',
        name: 'Gearbox Software',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'frlidev',
        name: 'Free Lives',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'coapdev',
        name: 'ConcernedApe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'padestdev',
        name: 'Paradox Development Studio',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'boindev',
        name: 'Bohemia Interactive',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'teradev',
        name: 'Textel Raptor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'redogadev',
        name: 'Red Dot Games',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'spindev',
        name: 'SPORTS INTERACTIVE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'slmastdev',
        name: 'Slightly Mad Studios',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'coordev',
        name: 'Colossal Order',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'relodev',
        name: 'Re-Logic',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'crendev',
        name: 'Crate Entretainment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'sutedev',
        name: 'SUPERHOT Team',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'lapodev',
        name: 'Landon Podbielski',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'flwihodev',
        name: 'Flying Wild Hog',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'redev',
        name: 'Rebellion',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'coststdev',
        name: 'Coffee Stain Studios',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'scsodev',
        name: 'SCS Software',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'evtogadev',
        name: 'Evil Tortilla Games',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'sqdev',
        name: 'Squad',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'madev',
        name: 'Maxis',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'mogadev',
        name: 'Modulaatio Games',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'avstdev',
        name: 'Avalanche Studios',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: '4agadev',
        name: '4A GAMES',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'rostdev',
        name: 'Rockstar Studios',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'magadev',
        name: 'Machine Games',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: '2kgadev',
        name: '2K Games',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'legedev',
        name: 'League of Geeks',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      },
      {
        _id: 'tofodev',
        name: 'tobyfox',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.'
      }
    ];

    const contactInfo = {
      twitter: 'cdiezm_',
      facebook: 'carlos.diez.39794',
      mail: 'cdiezmoran@gmail.com',
      address: 'Mexico'
    }

    devData.forEach((developer) => {
      Developers.insert({
        _id: developer._id,
        name: developer.name,
        description: developer.description,
        contactInfo: contactInfo
      });
    });
  }
  if (Games.find().count() === 0) {
    const data = [
      {
        name: 'Stardew Valley',
        description: 'You\'ve inherited your grandfather\'s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'indie',
          'rpg',
          'simulation'
        ],
        rating: 0,
        img: 'https://i.ytimg.com/vi/fI9QzlD_sm0/maxresdefault.jpg',
        views: 0,
        availableOn: {
          windows: true,
          mac: false,
          linux: false
        },
        developerId: 'coapdev',
        imgHigh: 'https://i.ytimg.com/vi/fI9QzlD_sm0/maxresdefault.jpg'
      },
      {
        name: 'Stories: The Path of Destinies',
        description: 'Stories: The Path of Destinies is an Action-RPG, an enchanted storybook filled with madcap fantasy tales, each told by a zippy narrator attuned to the player’s choices and actions.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'action',
          'adventure',
          'indie',
          'rpg',
          'fantasy'
        ],
        rating: 0,
        img: 'https://i.ytimg.com/vi/4SdBQxtjPfs/maxresdefault.jpg',
        views: 8,
        availableOn: {
          windows: true,
          mac: false,
          linux: false
        },
        developerId: 'spgadev',
        imgHigh: 'https://i.ytimg.com/vi/4SdBQxtjPfs/maxresdefault.jpg'
      },
      {
        name: 'The Binding of Isaac',
        description: 'When Isaac’s mother starts hearing the voice of God demanding a sacrifice be made to prove her faith, Isaac escapes into the basement facing droves of deranged enemies, lost brothers and sisters, his fears, and eventually his mother.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'action',
          'adventure',
          'indie',
          'rpg'
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/113200/header.jpg?t=1447354527',
        views: 10,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'edmcdev',
        imgHigh: 'http://i.imgur.com/PTNhA.jpg'
      },
      {
        name: 'Bastion',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'action',
          'adventure',
          'indie',
          'rpg',
          'narration'
        ],
        rating: 0,
        img: 'http://thekoalition.com/images/2015/04/bastion-730x411.jpg',
        views: 9,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'sugadev',
        imgHigh: 'https://wallpaperscraft.com/image/bastion_kid_hammer_mushrooms_forest_21770_1920x1080.jpg'
      },
      {
        name: 'Stellaris',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'simulation',
          'strategy'
        ],
        rating: 0,
        img: 'https://i.ytimg.com/vi/bxTT258PmNc/maxresdefault.jpg',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'padestdev',
        imgHigh: 'https://i.ytimg.com/vi/bxTT258PmNc/maxresdefault.jpg'
      },
      {
        name: 'Ori and the Blind Forest',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'action',
          'adventure',
          'platformer'
        ],
        rating: 0,
        img: 'https://i.ytimg.com/vi/cklw-Yu3moE/maxresdefault.jpg',
        views: 7,
        availableOn: {
          windows: true,
          mac: false,
          linux: false
        },
        developerId: 'mostgmdev',
        imgHigh: ''
      },
      {
        name: 'Ark: Survival Evolved',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'action',
          'survival',
          'indie',
          'massively',
          'adventure',
          'rpg'
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/346110/header.jpg?t=1462394559',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'stwidev',
        imgHigh: ''
      },
      {
        name: 'Gigantic',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'action',
          'moba',
          'shooter'
        ],
        rating: 0,
        img: 'http://cdn.mmohuts.com/wp-content/uploads/2015/03/Gigantic_604x423.jpg',
        views: 2,
        availableOn: {
          windows: true,
          mac: false,
          linux: false
        },
        developerId: 'modev',
        imgHigh: ''
      },
      {
        name: 'Battleborn',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'action',
          'shooter',
          'rpg',
          'fps'
        ],
        rating: 0,
        img: 'https://battleborn.com/images/social-share.jpg',
        views: 0,
        availableOn: {
          windows: true,
          mac: false,
          linux: false
        },
        developerId: 'gesodev',
        imgHigh: ''
      },
      {
        name: 'Super Meat Boy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'indie',
          'platformer',
          'retro',
          'casual',
          'adventure'
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/40800/header.jpg?t=1447352515',
        views: 5,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'temedev',
        imgHigh: ''
      },
      {
        name: 'Broforce',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'action',
          'adventure',
          'casual',
          'indie'
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/274190/header.jpg?t=1459185901',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'frlidev',
        imgHigh: ''
      },
      {
        name: 'Don\'t Starve',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'adventure',
          'indie',
          'simulation',
          'survival'
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/219740/header.jpg?t=1459492015',
        views: 6,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'klendev',
        imgHigh: ''
      },
      {
        name: 'Arma 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'simulation',
          'strategy',
          'action',
          'shooter',
          'fps',
          'tactical'
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/107410/header.jpg?t=1455791379',
        views: 0,
        availableOn: {
          windows: true,
          mac: false,
          linux: false
        },
        developerId: 'boindev',
        imgHigh: 'https://i.ytimg.com/vi/iscE2eL3JHA/maxresdefault.jpg'
      },
      {
        name: 'Titan Souls',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'action',
          'adventure',
          'indie',
          'casual',
          'retro'
        ],
        rating: 0,
        img: 'https://metrouk2.files.wordpress.com/2015/04/titan_souls_-_key_art.jpg',
        views: 5,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'acnedev',
        imgHigh: ''
      },
      {
        name: 'Car Mechanic Simulator 2015',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'racing',
          'simulation'
        ],
        rating: 0,
        img: 'http://www.gry-online.pl/i/h/1/440265194.jpg',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'redogadev',
        imgHigh: ''
      },
      {
        name: 'Football Manager 2016',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'sports',
          'simulation'
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/378120/ss_f94c72855057a26b4a4a1426ba761b2cf610aad2.600x338.jpg?t=1462576113',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'spindev',
        imgHigh: ''
      },
      {
        name: 'Project Cars',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'sports',
          'simulation',
          'racing'
        ],
        rating: 0,
        img: 'https://elchapuzasinformatico.com/wp-content/uploads/2015/05/Project-CARS.jpg',
        views: 0,
        availableOn: {
          windows: true,
          mac: false,
          linux: false
        },
        developerId: 'slmastdev',
        imgHigh: 'https://elchapuzasinformatico.com/wp-content/uploads/2015/05/Project-CARS.jpg'
      },
      {
        name: 'Cities: Skylines',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'strategy',
          'simulation'
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/255710/header.jpg?t=1455897260',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'coordev',
        imgHigh: ''
      },
      {
        name: 'Terraria',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'action',
          'adventure',
          'indie',
          'rpg'
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg?t=1447354225',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'relodev',
        imgHigh: ''
      },
      {
        name: 'Grim Dawn',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'action',
          'adventure',
          'indie',
          'rpg'
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/219990/header.jpg?t=1459816926',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'crendev',
        imgHigh: ''
      },
      {
        name: 'SUPERHOT',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'action',
          'shooter',
          'indie',
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/322500/header.jpg?t=1461935166',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'sutedev',
        imgHigh: ''
      },
      {
        name: 'Borderlands 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'action',
          'shooter',
          'rpg'
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/49520/header.jpg?t=1450123296',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'gesodev',
        imgHigh: ''
      },
      {
        name: 'Duck Game',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'action',
          'shooter',
          'indie'
        ],
        rating: 0,
        img: 'https://armedgamer.com/wp-content/uploads/2015/06/Duck-Game-featured-660x400.jpg',
        views: 0,
        availableOn: {
          windows: true,
          mac: false,
          linux: false
        },
        developerId: 'lapodev',
        imgHigh: ''
      },
      {
        name: 'Shadow Warrior',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'action',
          'shooter',
          'adventure',
          'fps'
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/233130/header.jpg?t=1462465505',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'flwihodev',
        imgHigh: ''
      },
      {
        name: 'Sniper Elite 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'action',
          'shooter',
          'adventure',
          'fps',
          'sniper',
          'stealth',
          'tactical'
        ],
        rating: 0,
        img: 'https://media.playstation.com/is/image/SCEA/sniper-elite-3-listing-thumb-01-ps4-us-14jul14?$Icon$',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'redev',
        imgHigh: 'https://media.playstation.com/is/image/SCEA/sniper-elite-3-listing-thumb-01-ps4-us-14jul14?$Icon$'
      },
      {
        name: 'Goat Simulator',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'simulation',
          'casual',
          'indie'
        ],
        rating: 0,
        img: 'https://media.playstation.com/is/image/SCEA/goat-simulator-listing-thumb-01-us-07aug15?$Icon$',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'coststdev',
        imgHigh: ''
      },
      {
        name: 'Euro Truck Simulator 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'simulation',
          'casual',
          'indie'
        ],
        rating: 0,
        img: 'http://www.geforce.com/sites/default/files-world/attachments/EuroTruckBanner.jpg',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'scsodev',
        imgHigh: ''
      },
      {
        name: 'Who\'s Your Daddy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'simulation',
          'casual',
          'action',
          'indie'
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/427730/header.jpg?t=1463163137',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'evtogadev',
        imgHigh: ''
      },
      {
        name: 'Kerbal Space Program',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'simulation',
          'casual',
          'space',
          'indie'
        ],
        rating: 0,
        img: 'http://im.ziffdavisinternational.com/ign_es/screenshot/default/kerbal-space-program_6zsx.jpg',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'sqdev',
        imgHigh: ''
      },
      {
        name: 'Spore',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'simulation',
          'space'
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/17390/header.jpg?t=1447351583',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'madev',
        imgHigh: ''
      },
      {
        name: 'RUNNING WITH RIFLES',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'shooter',
          'action',
          'rpg',
          'indie'
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/270150/header.jpg?t=1463035327',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'mogadev',
        imgHigh: ''
      },
      {
        name: 'Metro 2033 Redux',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'shooter',
          'action',
          'fps'
        ],
        rating: 0,
        img: 'http://cramgaming.com/wp-content/uploads/2014/08/metro-2033-redux.jpg',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: '4agadev',
        imgHigh: ''
      },
      {
        name: 'Max Payne 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'shooter',
          'action',
          'adventure',
          'third-person'
        ],
        rating: 0,
        img: 'http://vignette1.wikia.nocookie.net/rdr/images/4/4e/Maxpayne3_newswireposter2_640x400.jpg/revision/latest?cb=20120117154605&path-prefix=es',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'rostdev',
        imgHigh: ''
      },
      {
        name: 'Wolfenstein: The New Order',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'shooter',
          'action',
          'fps'
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/201810/header.jpg?t=1447361219',
        views: 0,
        availableOn: {
          windows: true,
          mac: false,
          linux: false
        },
        developerId: 'magadev',
        imgHigh: ''
      },
      {
        name: 'Bioshock',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'shooter',
          'action',
          'fps',
          'rpg'
        ],
        rating: 0,
        img: 'https://upload.wikimedia.org/wikipedia/en/8/86/Bioshock_series.jpg',
        views: 0,
        availableOn: {
          windows: true,
          mac: false,
          linux: false
        },
        developerId: '2kgadev',
        imgHigh: ''
      },
      {
        name: 'Bioshock 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'shooter',
          'action',
          'fps',
          'rpg'
        ],
        rating: 0,
        img: 'http://images.akamai.steamusercontent.com/ugc/55499569487397083/2F09DBD49F1B8C6A2AB1D3E7CAF5718112C6F155/',
        views: 0,
        availableOn: {
          windows: true,
          mac: false,
          linux: false
        },
        developerId: '2kgadev',
        imgHigh: ''
      },
      {
        name: 'Armello',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'rpg',
          'indie',
          'adventure',
          'strategy'
        ],
        rating: 0,
        img: 'http://radiogameon.com/wp-content/uploads/2016/04/armello.jpg',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'legedev',
        imgHigh: ''
      },
      {
        name: 'Undertale',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'rpg',
          'indie'
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/391540/header.jpg?t=1453305836',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'tofodev',
        imgHigh: ''
      },
      {
        name: 'Parkitect',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat purus. Nam tempus diam vel felis convallis tincidunt. Aenean leo lorem, vehicula congue dolor vitae, interdum efficitur mauris. Nunc non posuere diam. Praesent ac risus eu massa consectetur maximus. Quisque blandit lectus eget urna porttitor egestas. Nulla facilisi.',
        createdAt: new Date(),
        releaseDate: new Date(),
        genre: [
          'simulation',
          'indie'
        ],
        rating: 0,
        img: 'http://cdn.akamai.steamstatic.com/steam/apps/453090/header.jpg?t=1462464105',
        views: 0,
        availableOn: {
          windows: true,
          mac: true,
          linux: true
        },
        developerId: 'teradev',
        imgHigh: ''
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
        availableOn: game.availableOn,
        developerId: game.developerId,
        imgHigh: game.imgHigh,
        minSysRequirements: sysRequirements,
        recommendedSysRequirements: sysRequirements
      });
    });
  }
});
