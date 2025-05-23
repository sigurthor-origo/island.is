import {
  Box,
  Button,
  Link,
  Navigation,
  Stack,
  Text,
} from '@island.is/island-ui/core'
import * as styles from './SidebarNavigation.css'
import { useIsDesktop } from '../../utils/useDesktop'
import LiveButton from '../LiveButton/LiveButton'

export const SidebarNavigation = ({ active }: { active: string }) => {
  const isDesktop = useIsDesktop()

  if (isDesktop === null) {
    return null // Or show a loading indicator
  }

  const menuItems = [
    { title: 'Forsíða', href: '/', active: active === '/', items: [] },
    {
      title: 'Þingfundir og mál',
      href: '/thingfundir-og-mal',
      active: active === 'thingfundir-og-mal',
      items: [],
    },
    {
      title: 'Þingmenn',
      href: '/thingmenn',
      active: active === 'thingmenn',
      items: [
        {
          title: 'Heimasíður, netföng og símanúmer',
          href: '#',
          active: active === 'heimasidur-netfong-og-simanumer',
        },
        {
          title: 'Sætaskipan',
          href: '#',
          active: active === 'saetaskipan',
        },
        {
          title: 'Aðstoðarmenn',
          href: '#',
          active: active === 'adstodarmenn',
        },
        {
          title: 'Mögulegir varaþingmenn',
          href: '#',
          active: active === 'mugulegir-varathingmenn',
        },
      ],
    },
    {
      title: 'Nefndir',
      href: '#',
      active: active === 'nefndir' || active === 'thingmalalistar',
      items: [],
    },
    { title: 'Lagasafn', href: '#', active: active === 'lagasafn', items: [] },

    {
      title: 'Alþjóðastarf',
      href: '#',
      active: active === 'althjodastarf',
      items: [],
    },
    {
      title: 'Ályktanir Alþingis',
      href: '#',
      active: active === 'alyktanis-althingis',
      items: [],
    },
    {
      title: 'Um Alþingi',
      href: '/um-althingi/utgefin-efni/handbok',
      active: active === 'um-althingi',
      items: [],
    },
  ]

  return (
    <div>
      {!isDesktop && (
        <Box marginBottom={3}>
          <LiveButton />
        </Box>
      )}

      <Navigation baseId="althingi" title="Efnisyfirlit" items={menuItems} />

      <Box
        display={'flex'}
        flexDirection={'column'}
        borderRadius="large"
        border="standard"
        padding={[2]}
        marginY={3}
      >
        <Text variant="medium" fontWeight="light" marginY={2}>
          Þriðjudagur 31. október 2023
        </Text>
        <Box
          marginY={2}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <svg
            width="77"
            height="60"
            viewBox="0 0 77 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M76.5604 52.1947C75.4413 40.9093 72.6419 12.8782 72.0303 8.78135C71.2621 3.63211 64.9523 4.76872 64.9523 4.76872L63.6011 56.8786H72.3993C73.5815 56.8786 74.7093 56.3687 75.5016 55.4753C76.2938 54.5814 76.6791 53.3933 76.5604 52.1953V52.1947Z"
              fill="url(#paint0_linear_153_6470)"
            />
            <path
              d="M5.38105 58.1917C2.63366 58.1332 0.453986 55.8588 0.511869 53.1115L1.40935 10.8072C1.45904 8.4732 3.32884 6.58762 5.66228 6.51863L67.0614 4.69678C68.8874 4.6424 70.3953 6.11111 70.39 7.93763L70.2427 56.4424C70.2374 58.159 68.8254 59.537 67.1094 59.5008L5.38105 58.1917Z"
              fill="url(#paint1_linear_153_6470)"
            />
            <path
              d="M1.42451 54.6404C0.545158 54.627 -0.118449 53.8394 0.0177808 52.9706C0.924029 47.2104 3.76789 27.3963 2.8558 10.9447C2.81429 10.1945 3.39545 9.55665 4.14676 9.53268L65.8225 7.56525C66.6679 7.53835 67.3766 8.19845 67.4087 9.04389C67.6712 15.9606 68.6476 44.4431 67.3695 54.5679C67.2918 55.1842 66.7621 55.642 66.1405 55.6326L1.42393 54.6404H1.42451Z"
              fill="url(#paint2_linear_153_6470)"
            />
            <path
              d="M2.98255 53.9927C2.13653 53.9798 1.49748 53.2221 1.62903 52.386C2.50078 46.8427 5.23823 27.7746 4.36005 11.9422C4.32029 11.2201 4.87924 10.6062 5.6019 10.5834L64.9553 8.69021C65.7692 8.66448 66.4509 9.30003 66.4819 10.1133C66.7345 16.7693 67.6746 44.1795 66.4445 53.9231C66.3696 54.5159 65.8598 54.9568 65.2622 54.9474L2.98255 53.9927Z"
              fill="#91B3FA"
            />
            <path
              d="M39.4625 20.6417L39.3719 24.9162C39.3578 25.5687 39.8811 26.1061 40.5336 26.1096L44.9181 26.1341C45.5566 26.1376 46.0798 25.6284 46.0933 24.9899L46.1886 20.4961C46.2026 19.8208 45.6431 19.2735 44.9684 19.3039L40.5792 19.4986C39.9641 19.5261 39.4753 20.026 39.4625 20.6417Z"
              fill="url(#paint3_linear_153_6470)"
            />
            <path
              d="M24.1332 26.0737L28.5177 26.0982C29.1562 26.1017 29.6795 25.5925 29.6929 24.954L29.7742 21.132C29.7882 20.4602 29.2351 19.9153 28.5639 19.9392L24.1753 20.0971C23.5561 20.1193 23.0621 20.621 23.0486 21.2401L22.9715 24.8798C22.9574 25.5322 23.4807 26.0696 24.1332 26.0731V26.0737Z"
              fill="url(#paint4_linear_153_6470)"
            />
            <path
              d="M27.9744 45.1146L23.8039 45.0743C23.1052 45.0673 22.531 45.6239 22.5164 46.3226L22.4334 50.2282C22.4188 50.9222 22.9614 51.5005 23.6548 51.5297L27.8224 51.7063C28.5368 51.7367 29.1361 51.1736 29.1513 50.4591L29.2373 46.4173C29.2525 45.7075 28.6848 45.1216 27.9744 45.1146Z"
              fill="url(#paint5_linear_153_6470)"
            />
            <path
              d="M20.958 50.134L21.0392 46.3155C21.0539 45.6174 20.4961 45.042 19.798 45.0356L15.5836 44.9947C14.8972 44.9883 14.333 45.5349 14.3184 46.2213L14.24 49.903C14.2254 50.5848 14.7586 51.1531 15.4404 51.1823L19.6518 51.3606C20.354 51.3905 20.9434 50.8374 20.958 50.1346V50.134Z"
              fill="url(#paint6_linear_153_6470)"
            />
            <path
              d="M21.3239 32.8934L21.3906 29.7584C21.4063 29.0012 20.7965 28.3791 20.0394 28.3809L16.015 28.3879C15.2819 28.389 14.6843 28.9755 14.6685 29.7081L14.6048 32.704C14.589 33.443 15.1708 34.0569 15.9092 34.0809L19.9306 34.2124C20.6813 34.237 21.3075 33.6435 21.3233 32.8928L21.3239 32.8934Z"
              fill="url(#paint7_linear_153_6470)"
            />
            <path
              d="M21.1303 42.0034L21.232 37.2084C21.2467 36.522 20.7064 35.9514 20.02 35.9292L15.9045 35.7947C15.1537 35.7701 14.5276 36.3636 14.5118 37.1143L14.4095 41.9501C14.3948 42.6529 14.9602 43.23 15.6624 43.2306H19.8779C20.5597 43.2306 21.1169 42.6857 21.1315 42.0039L21.1303 42.0034Z"
              fill="url(#paint8_linear_153_6470)"
            />
            <path
              d="M32.3329 26.1202L36.7174 26.1447C37.3559 26.1483 37.8792 25.639 37.8926 25.0005L37.9809 20.8371C37.9949 20.1653 37.4418 19.6203 36.7706 19.6443L32.382 19.8022C31.7629 19.8244 31.2688 20.326 31.2554 20.9452L31.1712 24.9263C31.1571 25.5788 31.6804 26.1161 32.3329 26.1196V26.1202Z"
              fill="url(#paint9_linear_153_6470)"
            />
            <path
              d="M29.3317 41.983L29.427 37.4986C29.4416 36.7999 28.892 36.2199 28.1933 36.1965L24.0246 36.0603C23.3148 36.0369 22.7225 36.5982 22.7079 37.308L22.6097 41.9287C22.5945 42.6437 23.1698 43.2313 23.8848 43.2313H28.0565C28.7505 43.2313 29.3171 42.6771 29.3317 41.9836V41.983Z"
              fill="url(#paint10_linear_153_6470)"
            />
            <path
              d="M36.8319 28.3511L32.044 28.3598C31.5184 28.361 31.0898 28.7814 31.0787 29.3064L30.9875 33.6184C30.9764 34.1481 31.3933 34.5884 31.923 34.6059L36.7074 34.7626C37.2459 34.7802 37.6949 34.3545 37.706 33.8166L37.8008 29.3392C37.8124 28.7966 37.3751 28.3505 36.8319 28.3511Z"
              fill="url(#paint11_linear_153_6470)"
            />
            <path
              d="M39.2739 29.5343L39.1868 33.6411C39.1728 34.307 39.6972 34.8601 40.3626 34.8824L44.6506 35.0227C45.3271 35.0449 45.8913 34.5099 45.9059 33.8335L45.9959 29.5788C46.0106 28.8965 45.4604 28.3357 44.7781 28.3369L40.4871 28.3445C39.8264 28.3457 39.2879 28.8742 39.2739 29.5343Z"
              fill="url(#paint12_linear_153_6470)"
            />
            <path
              d="M23.7277 34.3377L28.5121 34.4944C29.0506 34.5119 29.4996 34.0863 29.5107 33.5478L29.5996 29.3533C29.6113 28.8108 29.1739 28.3647 28.6308 28.3652L23.8429 28.374C23.3173 28.3752 22.8887 28.7956 22.8776 29.3206L22.7922 33.3496C22.7811 33.8793 23.198 34.3196 23.7277 34.3371V34.3377Z"
              fill="url(#paint13_linear_153_6470)"
            />
            <path
              d="M36.3882 36.4646L32.2194 36.3283C31.5096 36.305 30.9173 36.8662 30.9027 37.576L30.8104 41.929C30.7952 42.644 31.3705 43.2316 32.0855 43.2316H36.2572C36.9512 43.2316 37.5178 42.6773 37.5324 41.9839L37.6218 37.7666C37.6364 37.068 37.0868 36.4874 36.3882 36.4646Z"
              fill="url(#paint14_linear_153_6470)"
            />
            <path
              d="M44.7274 36.7376L40.2669 36.5914C39.6383 36.571 39.1139 37.0674 39.101 37.6965L39.0081 42.0792C38.9946 42.7124 39.5039 43.2328 40.1371 43.2328H44.6005C45.215 43.2334 45.7166 42.7422 45.7301 42.1277L45.8201 37.8906C45.833 37.272 45.346 36.7581 44.728 36.7376H44.7274Z"
              fill="url(#paint15_linear_153_6470)"
            />
            <path
              d="M16.5469 25.9745L19.8749 25.9932C20.7601 25.9985 21.4857 25.2922 21.5044 24.407L21.5628 21.6613C21.5804 20.8317 20.8969 20.1581 20.0678 20.188L16.3645 20.3207C15.5243 20.3511 14.8537 21.0317 14.8356 21.8724L14.787 24.1655C14.766 25.1542 15.5588 25.9687 16.5481 25.9745H16.5469Z"
              fill="url(#paint16_linear_153_6470)"
            />
            <path
              d="M12.8382 46.3321C12.854 45.5814 12.2535 44.9616 11.5028 44.9546L10.0534 44.9405C8.95183 44.93 8.05084 45.6579 8.03154 46.5753L7.97542 49.2291C7.95612 50.1389 8.8115 50.9007 9.90309 50.9469L11.4595 51.013C12.1617 51.0428 12.7511 50.4897 12.7657 49.7869L12.8388 46.3321H12.8382Z"
              fill="url(#paint17_linear_153_6470)"
            />
            <path
              d="M59.4516 45.4196L56.6007 45.3922C55.9014 45.3851 55.3267 45.9423 55.3121 46.6416L55.2068 51.6143C55.1922 52.3089 55.7354 52.8871 56.4288 52.9169L59.2668 53.0368C60.3982 53.0847 61.3477 52.3469 61.3676 51.4044L61.4582 47.1397C61.4781 46.2048 60.5753 45.4307 59.4516 45.4196Z"
              fill="url(#paint18_linear_153_6470)"
            />
            <path
              d="M10.1685 43.2295H11.5834C12.3172 43.2295 12.9165 42.6431 12.9323 41.9093L13.0357 37.0349C13.0515 36.2958 12.4698 35.6819 11.7313 35.658L10.3071 35.6112C9.1839 35.5744 8.249 36.3093 8.22912 37.2448L8.1385 41.5094C8.11862 42.4525 9.03598 43.2295 10.1685 43.2295Z"
              fill="url(#paint19_linear_153_6470)"
            />
            <path
              d="M10.2868 33.8978L12.0683 33.9563C12.6361 33.975 13.1096 33.5259 13.1219 32.9582L13.1968 29.4379C13.209 28.8655 12.7477 28.3948 12.1747 28.396L10.3757 28.3995C9.28469 28.4013 8.40067 29.1263 8.38137 30.0343L8.33576 32.1794C8.31647 33.0968 9.1853 33.8621 10.2868 33.8984V33.8978Z"
              fill="url(#paint20_linear_153_6470)"
            />
            <path
              d="M59.9071 18.7574L57.048 18.8603C56.4037 18.8837 55.8898 19.4052 55.8763 20.0496L55.7723 24.9614C55.7576 25.6402 56.302 26.1992 56.9808 26.2033L59.9246 26.2196C61.0227 26.2261 61.9172 25.4987 61.9371 24.5849L62.0242 20.4764C62.0447 19.5052 61.0729 18.7159 59.9077 18.7574H59.9071Z"
              fill="url(#paint21_linear_153_6470)"
            />
            <path
              d="M36.1735 45.1937L32.003 45.1534C31.3043 45.1464 30.7301 45.703 30.7155 46.4017L30.6272 50.5745C30.6126 51.2685 31.1552 51.8468 31.8486 51.876L36.0162 52.0526C36.7307 52.083 37.33 51.5199 37.3452 50.8055L37.4364 46.4964C37.4516 45.7866 36.8839 45.2007 36.1735 45.1937Z"
              fill="url(#paint22_linear_153_6470)"
            />
            <path
              d="M59.7867 28.3097L56.889 28.3149C56.2284 28.3161 55.6899 28.8447 55.6758 29.5048L55.5764 34.1775C55.5624 34.8434 56.0863 35.3965 56.7522 35.4182L59.6616 35.5135C60.7847 35.5503 61.7196 34.8154 61.7395 33.8799L61.8214 30.0292C61.8412 29.085 60.9216 28.3067 59.7867 28.3091V28.3097Z"
              fill="url(#paint23_linear_153_6470)"
            />
            <path
              d="M59.6818 37.2274L56.6572 37.1285C56.0287 37.1081 55.5042 37.6045 55.4908 38.2336L55.409 42.0813C55.3955 42.7145 55.9048 43.2349 56.538 43.2349H59.5771C60.6699 43.2349 61.5568 42.5099 61.5761 41.6007L61.6322 38.9469C61.6515 38.0295 60.7827 37.2642 59.6812 37.2279L59.6818 37.2274Z"
              fill="url(#paint24_linear_153_6470)"
            />
            <path
              d="M47.2959 37.9651L47.2088 42.0801C47.1953 42.7133 47.7046 43.2336 48.3378 43.2336H52.8012C53.4157 43.2336 53.9173 42.7431 53.9308 42.1286L54.015 38.1586C54.0278 37.5401 53.5408 37.0261 52.9228 37.0057L48.4623 36.8595C47.8338 36.839 47.3093 37.3354 47.2959 37.9645V37.9651Z"
              fill="url(#paint25_linear_153_6470)"
            />
            <path
              d="M52.5708 45.3529L48.4021 45.3126C47.7028 45.3055 47.1281 45.8627 47.1135 46.562L47.0135 51.2675C46.9989 51.9621 47.542 52.5403 48.2354 52.5701L52.4013 52.7461C53.1163 52.7765 53.7162 52.2135 53.7314 51.4979L53.8343 46.6567C53.8495 45.9464 53.2812 45.3599 52.5702 45.3529H52.5708Z"
              fill="url(#paint26_linear_153_6470)"
            />
            <path
              d="M10.5217 25.9406L12.2663 25.9506C12.8235 25.9535 13.2802 25.5091 13.2924 24.9519L13.3655 21.5088C13.3778 20.9223 12.8949 20.4464 12.309 20.4675L10.4614 20.5335C9.40375 20.5715 8.56825 21.2854 8.54954 22.1665L8.50569 24.2205C8.48581 25.1589 9.39498 25.9342 10.5222 25.9406H10.5217Z"
              fill="url(#paint27_linear_153_6470)"
            />
            <path
              d="M44.372 45.2732L40.2734 45.2335C39.5356 45.2264 38.9287 45.814 38.9135 46.5525L38.8211 50.9206C38.8065 51.6152 39.3496 52.1934 40.0436 52.2233L44.2095 52.3998C44.9245 52.4302 45.5244 51.8666 45.5396 51.1515L45.6367 46.5776C45.6519 45.8672 45.0836 45.2808 44.3726 45.2744L44.372 45.2732Z"
              fill="url(#paint28_linear_153_6470)"
            />
            <path
              d="M47.6696 20.3438L47.5726 24.9148C47.5579 25.5936 48.1023 26.1526 48.7811 26.1567L53.0714 26.1806C53.7356 26.1841 54.28 25.6544 54.294 24.9908L54.3945 20.2415C54.4092 19.5428 53.8338 18.9757 53.1352 19.0008L48.8413 19.1552C48.197 19.1785 47.6831 19.7001 47.6696 20.3444V20.3438Z"
              fill="url(#paint29_linear_153_6470)"
            />
            <path
              d="M47.4746 29.5192L47.3816 33.9089C47.3676 34.5749 47.892 35.128 48.5574 35.1502L52.8454 35.2905C53.5219 35.3128 54.0861 34.7778 54.1007 34.1013L54.1972 29.5636C54.2118 28.8813 53.6616 28.3206 52.9793 28.3218L48.6884 28.3294C48.0277 28.3305 47.4892 28.8591 47.4752 29.5192H47.4746Z"
              fill="url(#paint30_linear_153_6470)"
            />
            <path
              d="M10.0455 16.8302L10.2431 18.2779C10.3063 18.7416 10.6974 19.09 11.1652 19.1L11.2336 19.1011C11.7586 19.1122 12.193 18.6959 12.2041 18.1709L12.2357 16.6893C12.248 16.1152 11.7522 15.6615 11.181 15.724L10.8834 15.7568C10.3519 15.8152 9.97302 16.3005 10.0455 16.8302Z"
              fill="#BDD0FB"
            />
            <path
              d="M16.7638 16.4576L16.9614 17.9052C17.0245 18.3689 17.4157 18.7174 17.8834 18.7273L17.9518 18.7291C18.4769 18.7402 18.9113 18.3239 18.9224 17.7988L18.954 16.3173C18.9663 15.7431 18.4704 15.2894 17.8992 15.352L17.6016 15.3847C17.0701 15.4432 16.6913 15.9285 16.7638 16.4582V16.4576Z"
              fill="#BDD0FB"
            />
            <path
              d="M25.0309 16.5715L25.2285 18.0191C25.2916 18.4828 25.6828 18.8312 26.1505 18.8412L26.2189 18.8423C26.744 18.8534 27.1784 18.4372 27.1895 17.9121L27.2211 16.4305C27.2333 15.8564 26.7375 15.4027 26.1663 15.4652L25.8687 15.498C25.3372 15.5565 24.9584 16.0417 25.0309 16.5715Z"
              fill="#BDD0FB"
            />
            <path
              d="M33.0846 16.2111L33.2822 17.6588C33.3453 18.1224 33.7365 18.4709 34.2042 18.4808L34.2726 18.482C34.7977 18.4931 35.2321 18.0768 35.2432 17.5518L35.2748 16.0702C35.2871 15.496 34.7913 15.0423 34.22 15.1049L33.9224 15.1376C33.391 15.1961 33.0121 15.6814 33.0846 16.2111Z"
              fill="#BDD0FB"
            />
            <path
              d="M41.3566 15.1593L41.5542 16.607C41.6173 17.0707 42.0085 17.4191 42.4762 17.4291L42.5446 17.4302C43.0697 17.4413 43.5041 17.0251 43.5152 16.5L43.5468 15.0184C43.559 14.4443 43.0632 13.9906 42.492 14.0531L42.1944 14.0859C41.6629 14.1443 41.2841 14.6296 41.3566 15.1593Z"
              fill="#BDD0FB"
            />
            <path
              d="M50.1197 15.3449L50.3174 16.7926C50.3805 17.2562 50.7717 17.6047 51.2394 17.6146L51.3078 17.6158C51.8328 17.6269 52.2673 17.2106 52.2784 16.6856L52.3099 15.204C52.3222 14.6298 51.8264 14.1761 51.2552 14.2387L50.9576 14.2714C50.4261 14.3299 50.0472 14.8152 50.1197 15.3449Z"
              fill="#BDD0FB"
            />
            <path
              d="M57.5167 15.1901L57.7143 16.6378C57.7775 17.1014 58.1686 17.4499 58.6364 17.4598L58.7048 17.461C59.2298 17.4721 59.6642 17.0558 59.6753 16.5308L59.7069 15.0492C59.7192 14.4751 59.2234 14.0213 58.6522 14.0839L58.3546 14.1166C57.8231 14.1751 57.4442 14.6604 57.5167 15.1901Z"
              fill="#BDD0FB"
            />
            <path
              d="M45.6132 32.261C45.5951 31.9482 45.2683 31.8144 45.0274 32.0038C44.3474 32.5394 44.0714 33.3708 43.7364 34.1466C43.3458 35.0505 42.9717 35.9615 42.6396 36.8888C42.2893 37.8657 41.9906 38.8609 41.7631 39.8712C41.3118 38.6644 40.7879 37.4892 40.1225 36.3742C39.946 36.0784 39.4472 36.2515 39.546 36.6028C40.1214 38.6469 40.8288 40.65 41.3702 42.7045C41.5614 43.4295 42.553 43.2582 42.6267 42.5613C42.8284 40.6587 43.288 38.8381 43.9399 37.0414C44.2498 36.1871 44.5959 35.3458 44.9549 34.5109C45.2724 33.7713 45.6612 33.0825 45.6132 32.261Z"
              fill="url(#paint31_linear_153_6470)"
            />
            <path
              d="M46.5473 33.7768C45.9556 33.6663 45.741 34.4228 46.283 34.6614C49.8718 36.24 50.3407 40.6888 47.7482 43.383C46.5491 44.6289 44.9582 45.596 43.452 46.4274C41.9243 47.2705 40.2188 47.9148 38.4454 47.7365C34.3358 47.3237 33.7768 43.1404 35.0058 39.913C36.1874 36.8083 38.7191 34.4117 41.8179 33.2628C42.2184 33.1143 42.0628 32.463 41.653 32.6098C38.7454 33.6522 36.271 35.7091 34.738 38.4004C33.3278 40.8759 32.4818 44.3682 34.3276 46.8536C36.2377 49.4251 39.8633 49.4712 42.5949 48.3995C45.5995 47.2202 49.3409 45.0324 50.5371 41.8576C51.7901 38.5319 50.2436 34.4679 46.5479 33.7768H46.5473Z"
              fill="url(#paint32_linear_153_6470)"
            />
            <path
              d="M35.5921 33.2133C35.5781 32.248 35.6219 31.223 35.2349 30.3255C35.1062 30.0268 34.6964 30.1455 34.6005 30.3951C34.2883 31.2061 34.3608 32.1205 34.3544 32.9788C34.3514 33.3892 34.3859 33.8517 34.4011 34.3142C33.9404 32.894 33.2464 31.1704 31.7783 30.5436C30.2739 29.9011 28.5801 30.4781 27.1769 31.1154C23.8811 32.6116 21.3582 35.328 18.2775 37.1709C16.4247 38.2795 13.7743 39.1273 12.6044 36.6564C11.7765 34.9077 12.1829 32.5245 12.7944 30.7681C13.9725 27.384 16.6229 24.667 19.8754 23.2141C20.1116 23.1089 19.9544 22.7014 19.7065 22.7885C16.4726 23.9263 13.9234 26.3696 12.4921 29.4772C11.3041 32.0568 10.1897 36.5979 12.8617 38.6648C15.7739 40.9175 19.7287 37.6907 22.0218 35.9519C23.6443 34.7211 25.2381 33.4284 27.0529 32.4859C28.0738 31.9556 29.3039 31.3815 30.4832 31.4575C32.1156 31.5627 32.7214 33.3594 33.1108 34.6919C33.306 35.3602 34.1994 35.2725 34.407 34.7855C34.4041 35.0281 34.3871 35.2649 34.352 35.4912C33.1061 35.4379 31.88 34.3855 30.6253 34.8129C30.447 34.8737 30.3879 35.117 30.5627 35.2245C31.6748 35.9092 33.5212 36.8827 34.8566 36.7365C35.1478 36.7044 35.3863 36.5746 35.4816 36.2811C35.778 35.3713 35.6056 34.1587 35.5921 33.2133Z"
              fill="url(#paint33_linear_153_6470)"
            />
            <path
              d="M70.3899 56.0747C70.3045 56.0747 70.2349 56.0057 70.2344 55.9203L70.0449 28.6084C70.0449 28.5224 70.1133 28.4522 70.1993 28.4517H70.2004C70.2858 28.4517 70.3554 28.5207 70.356 28.606L70.5454 55.918C70.5454 56.0039 70.477 56.0741 70.3911 56.0747H70.3899Z"
              fill="#91B3FA"
            />
            <path
              d="M70.1571 22.4916C70.0718 22.4916 70.0022 22.4226 70.0016 22.3373L69.9355 12.7983C69.9355 12.7124 70.004 12.6422 70.0899 12.6416H70.0911C70.1764 12.6416 70.246 12.7106 70.2466 12.796L70.3127 22.3349C70.3127 22.4209 70.2443 22.4911 70.1583 22.4916C70.1583 22.4916 70.1577 22.4916 70.1571 22.4916Z"
              fill="#91B3FA"
            />
            <path
              d="M12.3377 14.3558C13.1868 14.0042 13.59 13.0308 13.2383 12.1817C12.8866 11.3327 11.9132 10.9295 11.0642 11.2812C10.2151 11.6329 9.81195 12.6063 10.1636 13.4553C10.5153 14.3043 11.4887 14.7075 12.3377 14.3558Z"
              fill="#7D97F4"
            />
            <path
              d="M26.5123 13.867C27.1621 13.2172 27.1621 12.1636 26.5123 11.5138C25.8624 10.864 24.8089 10.864 24.159 11.5138C23.5092 12.1636 23.5092 13.2172 24.159 13.867C24.8089 14.5169 25.8624 14.5169 26.5123 13.867Z"
              fill="#7D97F4"
            />
            <path
              d="M40.2755 13.4198C40.9253 12.77 40.9253 11.7164 40.2755 11.0665C39.6256 10.4167 38.572 10.4167 37.9222 11.0665C37.2724 11.7164 37.2724 12.77 37.9222 13.4198C38.5721 14.0696 39.6256 14.0696 40.2755 13.4198Z"
              fill="#7D97F4"
            />
            <path
              d="M52.7333 13.2665C53.6523 13.2665 54.3973 12.5215 54.3973 11.6025C54.3973 10.6835 53.6523 9.93848 52.7333 9.93848C51.8143 9.93848 51.0693 10.6835 51.0693 11.6025C51.0693 12.5215 51.8143 13.2665 52.7333 13.2665Z"
              fill="#7D97F4"
            />
            <path
              d="M53.9988 0.0712004C51.1982 0.682187 51.4625 8.04969 51.6882 11.0409C51.7414 11.7448 52.3272 12.2874 53.0335 12.2874C53.2294 12.2874 53.4159 12.2032 53.5468 12.0571C53.6778 11.9115 53.7404 11.7162 53.7193 11.5215C53.4773 9.26055 52.9627 2.75019 55.0243 2.4023C55.0243 2.4023 56.503 2.14037 56.752 5.00528H58.3517C58.3517 5.00528 57.5197 -0.697064 53.9988 0.0712004Z"
              fill="#91B3FA"
            />
            <path
              d="M40.3645 0.449776C37.5639 1.06076 37.8282 8.4306 38.0539 11.4218C38.1071 12.1258 38.6929 12.6701 39.3992 12.6701C39.5951 12.6701 39.7816 12.5865 39.9126 12.4403C40.0435 12.2947 40.1061 12.0994 40.085 11.9047C39.843 9.64381 39.3285 3.12876 41.39 2.78029C41.39 2.78029 42.8687 2.57566 43.1178 5.37801H44.7174C44.7174 5.37801 43.8854 -0.319074 40.3645 0.44919V0.449776Z"
              fill="#91B3FA"
            />
            <path
              d="M26.7293 0.83097C23.9287 1.44196 24.1929 8.81355 24.4186 11.8048C24.4718 12.5087 25.0577 13.0536 25.764 13.0536C25.9598 13.0536 26.1463 12.9706 26.2773 12.8244C26.4083 12.6788 26.4708 12.4841 26.4498 12.2895C26.2077 10.0285 25.6932 3.50995 27.7548 3.16207C27.7548 3.16207 29.2328 2.99544 29.4819 5.81241L31.0828 5.75687C31.0828 5.75687 30.2508 0.0632905 26.7298 0.831555L26.7293 0.83097Z"
              fill="#91B3FA"
            />
            <path
              d="M13.0945 1.2706C10.2939 1.88159 10.5582 9.25728 10.7839 12.2485C10.8371 12.9524 11.4229 13.4997 12.1292 13.4997C12.3251 13.4997 12.5116 13.4173 12.6425 13.2717C12.7735 13.1261 12.8361 12.932 12.815 12.7367C12.573 10.4757 12.0585 3.94959 14.12 3.60112C14.12 3.60112 15.5987 3.38596 15.8477 6.18773H17.4474C17.4474 6.18773 16.6154 0.502342 13.0945 1.27002V1.2706Z"
              fill="#91B3FA"
            />
            <defs>
              <linearGradient
                id="paint0_linear_153_6470"
                x1="86.6046"
                y1="29.1661"
                x2="44.8546"
                y2="33.0255"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#09005D" />
                <stop offset="1" stop-color="#1A0F91" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_153_6470"
                x1="42.1238"
                y1="-4.59665"
                x2="31.602"
                y2="59.2377"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#09005D" />
                <stop offset="1" stop-color="#1A0F91" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_153_6470"
                x1="-0.000344131"
                y1="31.5984"
                x2="68.0133"
                y2="31.5984"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4042E2" />
                <stop offset="1" stop-color="#4F52FF" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_153_6470"
                x1="39.3719"
                y1="22.719"
                x2="46.1892"
                y2="22.719"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_153_6470"
                x1="22.9709"
                y1="23.0187"
                x2="29.7742"
                y2="23.0187"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_153_6470"
                x1="22.4334"
                y1="48.3906"
                x2="29.2379"
                y2="48.3906"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_153_6470"
                x1="14.24"
                y1="48.1777"
                x2="21.0398"
                y2="48.1777"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_153_6470"
                x1="14.6048"
                y1="31.2978"
                x2="21.3906"
                y2="31.2978"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_153_6470"
                x1="14.4083"
                y1="39.5121"
                x2="21.2326"
                y2="39.5121"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_153_6470"
                x1="31.1712"
                y1="22.8945"
                x2="37.9815"
                y2="22.8945"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint10_linear_153_6470"
                x1="22.6097"
                y1="39.6455"
                x2="29.427"
                y2="39.6455"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint11_linear_153_6470"
                x1="30.9864"
                y1="31.5569"
                x2="37.8008"
                y2="31.5569"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint12_linear_153_6470"
                x1="39.1862"
                y1="31.6795"
                x2="45.9965"
                y2="31.6795"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint13_linear_153_6470"
                x1="22.7916"
                y1="31.4301"
                x2="29.6002"
                y2="31.4301"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint14_linear_153_6470"
                x1="30.8104"
                y1="39.7797"
                x2="37.6224"
                y2="39.7797"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint15_linear_153_6470"
                x1="39.0075"
                y1="39.9124"
                x2="45.8201"
                y2="39.9124"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint16_linear_153_6470"
                x1="14.7853"
                y1="23.0903"
                x2="21.5623"
                y2="23.0903"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint17_linear_153_6470"
                x1="7.97425"
                y1="47.9768"
                x2="12.8388"
                y2="47.9768"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint18_linear_153_6470"
                x1="55.2062"
                y1="49.2154"
                x2="61.4588"
                y2="49.2154"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint19_linear_153_6470"
                x1="8.13792"
                y1="39.4198"
                x2="13.0357"
                y2="39.4198"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint20_linear_153_6470"
                x1="8.33576"
                y1="31.1755"
                x2="13.1968"
                y2="31.1755"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint21_linear_153_6470"
                x1="55.7717"
                y1="22.4877"
                x2="62.0242"
                y2="22.4877"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint22_linear_153_6470"
                x1="30.6267"
                y1="48.6036"
                x2="37.437"
                y2="48.6036"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint23_linear_153_6470"
                x1="55.5764"
                y1="31.9124"
                x2="61.8214"
                y2="31.9124"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint24_linear_153_6470"
                x1="55.409"
                y1="40.1817"
                x2="61.6328"
                y2="40.1817"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint25_linear_153_6470"
                x1="47.2082"
                y1="40.0472"
                x2="54.015"
                y2="40.0472"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint26_linear_153_6470"
                x1="47.0135"
                y1="49.0299"
                x2="53.8349"
                y2="49.0299"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint27_linear_153_6470"
                x1="8.50511"
                y1="23.2084"
                x2="13.3649"
                y2="23.2084"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint28_linear_153_6470"
                x1="38.8199"
                y1="48.8169"
                x2="45.6361"
                y2="48.8169"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint29_linear_153_6470"
                x1="47.5726"
                y1="22.5901"
                x2="54.3951"
                y2="22.5901"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint30_linear_153_6470"
                x1="47.3816"
                y1="31.8064"
                x2="54.1972"
                y2="31.8064"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DAE3FE" />
                <stop offset="1" stop-color="#E9EFFD" />
              </linearGradient>
              <linearGradient
                id="paint31_linear_153_6470"
                x1="39.523"
                y1="37.4594"
                x2="45.5181"
                y2="37.586"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E1473D" />
                <stop offset="1" stop-color="#E9605A" />
              </linearGradient>
              <linearGradient
                id="paint32_linear_153_6470"
                x1="33.3336"
                y1="40.6764"
                x2="50.9442"
                y2="41.0483"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E1473D" />
                <stop offset="1" stop-color="#E9605A" />
              </linearGradient>
              <linearGradient
                id="paint33_linear_153_6470"
                x1="11.3011"
                y1="30.9799"
                x2="35.7374"
                y2="31.4961"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E1473D" />
                <stop offset="1" stop-color="#E9605A" />
              </linearGradient>
            </defs>
          </svg>

          <Text variant="h3" marginTop={2}>
            Dagskrá 35. þingfundar
          </Text>
        </Box>
        <Box display={'flex'} justifyContent={'flexEnd'}>
          <Link href="#">
            <Button variant="text" icon="arrowForward" size="small">
              Skoða dagskrá
            </Button>
          </Link>
        </Box>
      </Box>

      <Box
        background="purple100"
        display={'flex'}
        borderRadius="large"
        padding={[3, 3, 4]}
        marginY={3}
      >
        <Stack space={[1, 1, 2]}>
          <Text variant="eyebrow" as="h2" color="blueberry600">
            Annað efni
          </Text>
          <Text color="blueberry600">Ræður</Text>
          <Text color="blueberry600">Erindi</Text>
          <Text color="blueberry600">Lög og ályktanir</Text>
          <Text color="blueberry600">Alþingistíðindi</Text>
          <Link href="/upptokur">
            <Text
              color="blueberry600"
              fontWeight={active === 'upptokur' ? 'semiBold' : 'light'}
            >
              Upptökur
            </Text>
          </Link>
        </Stack>
      </Box>
    </div>
  )
}
