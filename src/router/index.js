import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ready from '@/components/Ready'
import ThemeDevelopment from '@/components/ThemeDevelopment'
import VisualDesign from '@/components/VisualDesign'
import EasyEditing from '@/components/EasyEditing'
import WordPressConversion from '@/components/WordPressConversion'
import PluginSupport from '@/components/PluginSupport'
import DigitalSEO from '@/components/DigitalSEO'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
	      	{
		    	path: '/Ready',
		    	name: 'Ready',
		    	component: Ready,
		    	children: [
		    		{
		    			path: '/ThemeDevelopment',
				    	name: 'ThemeDevelopment',
				    	component: ThemeDevelopment
		    		},
		    		{
		    			path: '/VisualDesign',
				    	name: 'VisualDesign',
				    	component: VisualDesign
		    		},
		    		{
		    			path: '/EasyEditing',
				    	name: 'EasyEditing',
				    	component: EasyEditing
		    		},
		    		{
		    			path: '/WordPressConversion',
				    	name: 'WordPressConversion',
				    	component: WordPressConversion
		    		},
		    		{
		    			path: '/PluginSupport',
				    	name: 'PluginSupport',
				    	component: PluginSupport
		    		},
		    		{
		    			path: '/DigitalSEO',
				    	name: 'DigitalSEO',
				    	component: DigitalSEO
		    		}
		    	]
	    	}
    	]
    }
  ]
})
