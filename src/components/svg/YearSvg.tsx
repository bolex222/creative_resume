import React from "react";
import ScalableSvgContainer from "./ScalableSvgContainer";
import styles from './YearSvg.module.scss'

const YearSvg = () => {
    return (
            <svg className={styles.yearSvg} width="157" height="69" viewBox="0 0 157 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.071 43.476C46.0284 43.0919 43.6688 47.7561 32.6941 47.8659L29.5114 47.811C31.5417 44.4637 39.1692 39.3056 43.0652 34.9706C48.2234 29.1539 47.6746 23.6666 45.8089 19.7705C45.5894 19.3315 45.315 18.8925 45.0407 18.5084C43.8335 16.6427 42.0775 15.3257 40.1569 14.5575C38.0168 13.6795 35.2183 13.2954 33.0233 13.6795C28.4688 14.3929 26.0543 18.1243 25.3959 20.2644C24.4081 23.8312 25.2861 26.6846 26.4933 27.8918C27.3713 28.7698 28.798 29.3186 30.0053 29.2088C31.7063 29.0991 33.5721 27.4528 33.5721 25.4774C33.5172 22.5691 31.3222 21.746 31.0479 19.4413C30.7186 16.8073 32.4746 15.4904 33.8464 15.4355C36.3706 15.3257 38.1266 17.7402 38.8399 21.3619C39.9374 26.4102 38.7302 32.8854 32.9136 39.58C29.1822 43.915 25.4507 48.4695 24.463 53.1338C24.3533 53.6825 24.2984 54.0118 24.902 53.9569C24.9569 53.9569 42.297 54.1215 45.0956 54.1215C45.6992 54.1215 45.754 54.0118 45.754 53.7374C45.6443 51.6522 46.0284 48.9634 46.6869 46.0551C46.8515 45.232 47.3454 43.5309 47.071 43.476Z" fill="#EFEFEF" fill-opacity="0.82"/>
                <path d="M66.0856 13.4052C57.3058 12.7467 51.3246 21.1424 50.6661 33.5438C50.2271 42.1041 52.5867 48.9634 57.1961 52.6399C61.3665 55.9323 66.5246 55.4934 69.6524 54.0118C75.2496 51.3778 78.4322 44.0247 78.6517 35.629C79.0358 23.7763 74.4264 14.0636 66.0856 13.4052ZM66.0308 53.5728C61.8604 53.7374 59.2264 45.6161 58.1289 34.9706C57.0315 24.3799 58.4033 15.6001 62.9578 15.1611C67.0185 14.777 69.3232 20.2644 70.5304 27.8918C70.8048 29.7575 71.0791 31.733 71.1889 33.8182C72.0669 44.4088 70.9145 53.4081 66.0308 53.5728Z" fill="#EFEFEF" fill-opacity="0.82"/>
                <path d="M104.892 43.476C103.85 43.0919 101.49 47.7561 90.5152 47.8659L87.3325 47.811C89.3628 44.4637 96.9903 39.3056 100.886 34.9706C106.044 29.1539 105.496 23.6666 103.63 19.7705C103.411 19.3315 103.136 18.8925 102.862 18.5084C101.655 16.6427 99.8986 15.3257 97.978 14.5575C95.8379 13.6795 93.0394 13.2954 90.8444 13.6795C86.2899 14.3929 83.8755 18.1243 83.217 20.2644C82.2292 23.8312 83.1072 26.6846 84.3144 27.8918C85.1924 28.7698 86.6191 29.3186 87.8264 29.2088C89.5275 29.0991 91.3932 27.4528 91.3932 25.4774C91.3383 22.5691 89.1433 21.746 88.869 19.4413C88.5397 16.8073 90.2957 15.4904 91.6675 15.4355C94.1917 15.3257 95.9477 17.7402 96.661 21.3619C97.7585 26.4102 96.5513 32.8854 90.7347 39.58C87.0033 43.915 83.2718 48.4695 82.2841 53.1338C82.1744 53.6825 82.1195 54.0118 82.7231 53.9569C82.778 53.9569 100.118 54.1215 102.917 54.1215C103.52 54.1215 103.575 54.0118 103.575 53.7374C103.465 51.6522 103.85 48.9634 104.508 46.0551C104.673 45.232 105.166 43.5309 104.892 43.476Z" fill="#EFEFEF" fill-opacity="0.82"/>
                <path d="M131.15 43.476C130.107 43.0919 127.748 47.7561 116.773 47.8659L113.59 47.811C115.621 44.4637 123.248 39.3056 127.144 34.9706C132.302 29.1539 131.754 23.6666 129.888 19.7705C129.668 19.3315 129.394 18.8925 129.12 18.5084C127.913 16.6427 126.157 15.3257 124.236 14.5575C122.096 13.6795 119.297 13.2954 117.102 13.6795C112.548 14.3929 110.133 18.1243 109.475 20.2644C108.487 23.8312 109.365 26.6846 110.572 27.8918C111.45 28.7698 112.877 29.3186 114.084 29.2088C115.785 29.0991 117.651 27.4528 117.651 25.4774C117.596 22.5691 115.401 21.746 115.127 19.4413C114.798 16.8073 116.554 15.4904 117.925 15.4355C120.45 15.3257 122.206 17.7402 122.919 21.3619C124.016 26.4102 122.809 32.8854 116.993 39.58C113.261 43.915 109.53 48.4695 108.542 53.1338C108.432 53.6825 108.377 54.0118 108.981 53.9569C109.036 53.9569 126.376 54.1215 129.175 54.1215C129.778 54.1215 129.833 54.0118 129.833 53.7374C129.723 51.6522 130.107 48.9634 130.766 46.0551C130.931 45.232 131.424 43.5309 131.15 43.476Z" fill="#EFEFEF" fill-opacity="0.82"/>
                <rect x="1" y="1" width="155" height="66.5922" rx="33.2961" stroke="#EFEFEF" stroke-opacity="0.82" stroke-width="2"/>
            </svg>
    )
}

export default YearSvg