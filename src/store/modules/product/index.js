const state = {
  products: [
    {
      id: 1,
      name: 'Smdkits box',
      likes: 591,
      views: '141k',
      video: 'https://tbm-auth.alicdn.com/8713a9bf85650d60/fd91e66cbbe4e6c3/20220712_3c5c0b58437233d4_368644430612_mp4_264_sd_taobao.mp4?auth_key=1719385022-0-0-d5ab24deacf580fae4431da90dfda110&biz=video_plus-616a0f5d45654cd5&t=0b52358317193823223612528e13e4&t=0b52358317193823223612528e13e4&b=video_plus&p=cloudvideo_http_seller_sucai_vod_publish',
      images: ['https://m.media-amazon.com/images/I/5159OcYGxFL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/61f30Wa133L._SL1500_.jpg']
    },
    {
      id: 2,
      name: 'Smdkits box',
      likes: 591,
      views: '141k',
      video: 'https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4',
      images: ['https://m.media-amazon.com/images/I/61f30Wa133L._SL1500_.jpg', 'https://m.media-amazon.com/images/I/5159OcYGxFL._SL1500_.jpg']
    },
    {
      id: 3,
      name: 'Smdkits box',
      likes: 591,
      views: '141k',
      video: 'https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4',
      images: ['https://m.media-amazon.com/images/I/5159OcYGxFL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/61f30Wa133L._SL1500_.jpg']
    },
    {
      id: 4,
      name: 'Smdkits box',
      likes: 591,
      views: '141k',
      images: ['https://m.media-amazon.com/images/I/5159OcYGxFL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/61f30Wa133L._SL1500_.jpg']
    },
    {
      id: 5,
      name: 'Smdkits box',
      likes: 591,
      views: '141k',
      images: ['https://m.media-amazon.com/images/I/5159OcYGxFL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/61f30Wa133L._SL1500_.jpg']
    },
    {
      id: 6,
      name: 'Smdkits box',
      likes: 591,
      views: '141k',
      images: ['https://m.media-amazon.com/images/I/5159OcYGxFL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/61f30Wa133L._SL1500_.jpg']
    },
    {
      id: 7,
      name: 'Smdkits box',
      likes: 591,
      views: '141k',
      images: ['https://m.media-amazon.com/images/I/5159OcYGxFL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/61f30Wa133L._SL1500_.jpg']
    },
    {
      id: 8,
      name: 'Smdkits box',
      likes: 591,
      views: '141k',
      images: ['https://m.media-amazon.com/images/I/5159OcYGxFL._SL1500_.jpg', 'https://m.media-amazon.com/images/I/61f30Wa133L._SL1500_.jpg']
    }
  ]
};

const mutations = {
  UPDATE_PRODUCT_ITEMS(state, payload) {
    state.products = payload;
  }
};

const actions = {
  // getProduct({ commit }) {
  // get real product from dotgoint website
  // axios.get('https://fakestoreapi.com/users').then((response) => {
  //   commit('UPDATE_PRODUCT_ITEMS', response.data)
  // });
  // }
};

const getters = {
  products: state => state.products
};

const productModule = {
  state,
  mutations,
  actions,
  getters
}

export default productModule;
