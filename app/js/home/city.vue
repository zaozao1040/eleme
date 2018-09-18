<template>
	<section :class="$style.wrapper">
		<v-panel title="城市选择" :class="$style.pannel" cname="iconfont"></v-panel>
		<v-iconfont :class="$style.iconfont" url='backFlag'></v-iconfont>
		<v-searchinput placeholderText="输入城市名称或者拼音" @handleGetKeyword="handleShowCitylist"></v-searchinput>
		


    <div :class="$style.citiesSearchResult" ref="search" v-if="keyword">
      <ul>
        <li 
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li v-show="hasNoData">没有找到匹配数据。。</li>
      </ul>
    </div>



		<v-scroll :class="$style.citiesScroll" ref="cScroll" refScrollWrapper='citiesScroll' v-if="!keyword">
			<v-interval :class="$style.interval">
				<h5>当前城市</h5>
			</v-interval>
			<div :class="$style.citylistWrapper">
				<div>{{this.$store.state.city}}</div>
			</div>
			<v-interval :class="$style.interval">
				<h5>热门城市</h5>
			</v-interval>
			<div :class="$style.citylistWrapper">
				<div v-for="(item,index) of hotCities" :key="index" @click="handleCityClick(item.name)">
					{{item.name}}
				</div>
			</div>
			<div>
				<ul>
					<li v-for="(item,key) of cities" :key="key" :ref="key">
						<v-interval :class="$style.interval">
							<h5>{{key}}</h5>
						</v-interval>
						<ul>
							<li v-for="(item2,index) of item" :key="index" :class="$style.cityWrapper" @click="handleCityClick(item2.name)">
								{{item2.name}}
							</li>
						</ul>
					</li>
				</ul>
			</div>

		</v-scroll>

		<v-city_alphabet :cities="cities" @change="handleLetterChange"></v-city_alphabet>
	</section>
</template>

<script>
import axios from 'axios'
import panel from "../core/panel.vue"
import iconfont from "../core/iconfont.vue"
import searchinput from "../public/searchinput.vue"
import interval from "../core/interval.vue"
import btn from "../core/btn.vue"
import city_alphabet from "./city_alphabet.vue"
import scroll from "../core/scroll.vue"
export default {

  name: 'city',
  components: {
  	'v-panel': panel,
  	'v-iconfont': iconfont,
  	"v-searchinput":searchinput,
  	"v-interval":interval,
  	"v-btn":btn,
  	"v-city_alphabet":city_alphabet,
  	"v-scroll" : scroll,
  },
  data () {
    return {
    	hotCities: [],
    	cities: {},
      letter: '',
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    getDetailInfo: function () {
      axios.get('/api/city.json').then(this.handleGetDataSucc)
    },
    handleGetDataSucc: function (res) {
      //console.log(res)
      res = res.data
      if (res.ret && res.data) {
        this.hotCities = res.data.hotCities
        this.cities = res.data.cities
        
      }
    },
    handleCityClick: function (city) {
      this.$store.dispatch('changeCity',city)
      this.$router.push('/')
    },
    handleLetterChange: function (letter) {
      //console.log(letter)
      this.letter = letter
    },
  	handleShowCitylist: function(keyword){
  		this.keyword = keyword
  	}
  },
  created: function () {
    this.getDetailInfo()
  },
  computed: {
    hasNoData: function () {
      return !this.list.length
    }
  },
  watch: {
    letter: function () {
      if(this.letter){
        const element = this.$refs[this.letter][0]
        this.$refs.cScroll.getScrollEl().scrollToElement(element)
      }
      //console.log(this.letter)
    },
    keyword: function () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
        console.log(this.list)
      }, 100)
    }
  }
}
</script>

<style lang="scss" module>
@import "~@/css/reset.scss";
@import "~@/css/element.scss";
.wrapper{
	.pannel{
		@include panel($height: 70px,$bgcolor:#0085ff,$color:#fff);
		margin: 0;
		>h5{
			margin: 0;
		}
	}
	.iconfont{
		@include iconfont;
		position: fixed;
		top:20px;
		left: 20px;
	}
	.citiesSearchResult{
		margin: 10px;
		padding: 5px;
		font-size: 25px;
		margin:10px 20px 0 20px;
		li{
			padding: 10px 0 10px 0;
			font-size: 25px;
			border-bottom: 1px #90878745 solid;
		}
		
	}
	.citiesScroll{
		@include scroll;
		width: 100%;
    overflow: hidden;
    position: fixed;
    top: 145px;
    left: 0;
    bottom: 0; 
		.interval{
			@include interval;
			>h5{
				padding:5px 20px;
				font-size: 25px;
				color: #7d7272;
				margin:0;
			}
		}
		.citylistWrapper{
			overflow: hidden;
			>div{
				float:left;
				width: 25%;
				margin: 10px;
				padding: 5px;
				text-align: center;
				border: 1px solid #ccc;
				border-radius: 10px;
				font-size: 25px;
			}
		}
		.cityWrapper{
			margin:10px 20px 0 20px;
			padding-bottom: 10px;
			font-size: 25px;
			border-bottom: 1px #90878745 solid;
		}
	}

}

</style>