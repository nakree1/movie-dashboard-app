import React from 'react'

export default class FilmCard extends React.Component {

    getPagination = (current, max, range = 5) => {
        let c = current
        let m = max
        let r = range
        let delta = r % 3
        let temp = Array(range).fill(null)
        // console.log('Current:')
        // console.log(c)
        // console.log('Max:')
        // console.log(m)
        // console.log('Delta:')
        // console.log(delta)

        let right = c + delta > m ? m : c + delta
        let left = c - delta <= 1 ? 1 : c - delta

        let diff = right - left + 1

        let diffLeft = left - c
        let diffRight = right - c
        // console.log('left right diff <--')
        // console.log(diffLeft, diffRight)

        if (diffRight !== 2) left = left - diffRight
        if (diffLeft !== -2) right = right - diffLeft

        // if (diffRight !== 2) left = left - diffRight
        if (diffLeft === 0) right = right + diffRight
        if (diffRight === 0) left = left + diffLeft



        // console.log('left | right:')
        // console.log(left, right)
        // console.log('diff:')
        // console.log(diff)

        if (diff !== r) {}

        let temp1 = temp.map((item, index) => {
                return left + index
            })

        let temp2 = []

        for (let i = left; i <= right; i++) {
            temp2.push(i)
        }

        // console.log(temp1)
        console.log(temp2)

    }

    // << < 6 8 9 10 11> >>
    render() {
        const currentPage = 5
        const maxPages = 12
        const prevArrows = ['<<', '<']
        const nextArrows = ['>', '>>']

        this.getPagination(1, 12)
        this.getPagination(2, 12)
        this.getPagination(3, 12)
        this.getPagination(4, 12)
        this.getPagination(5, 12)
        this.getPagination(6, 12)
        this.getPagination(7, 12)
        this.getPagination(8, 12)
        this.getPagination(9, 12)
        this.getPagination(10, 12)
        this.getPagination(11, 12)
        this.getPagination(12, 12)
        // // const pages = [0, 0, 0, 0, 0]
        // const min = (currentPage - 2 > 1)
        //     ? currentPage - 2
        //     : 1
        // const max = (currentPage + 2 > maxPages)
        //     ? maxPages
        //     : currentPage + 2
        //
        // console.log('Current, Max:')
        // console.log(currentPage,maxPages)
        // console.log('min, max:')
        // console.log(min,max)
        //
        // let temp = Array(5).fill(null).map((item, index) => {
        //     return min + index
        // })
        //
        // temp = temp.map((item, index) => {
        //     let shift = 0
        //     if (temp[4] - maxPages !== 0) shift = temp[4] - maxPages
        //     return item - shift
        // })
        //
        // console.log(temp)

        // const pages = Array(5).fill(null).map((item, index) => {
        //     const min = (currentPage - 2 > 1)
        //         ? currentPage - 2
        //         : 1
        //     const max = (currentPage + 2 > maxPages)
        //         ? maxPages
        //         : currentPage + 2
        //
        //     switch (index) {
        //         case 0:
        //             return min
        //         case 1:
        //             return min + 1
        //         case 2:
        //             return currentPage
        //         case 3:
        //             return max - 1
        //         case 4:
        //             return max
        //     }
        // })
        // console.log(pages)
        const handler = this.props.handler
        const buttonGroup = (
            <div className="btn-group btn-group ">
                <button className="btn btn-outline-secondary" name="return" onClick={() => {handler('return')}}>
                    First Page
                </button>
                <button className="btn btn-outline-secondary" name="prev" onClick={() => {handler('prev')}}>
                    Prev
                </button>
                <button className="btn btn-outline-secondary" name="next" onClick={() => {handler('next')}}>
                    Next
                </button>
            </div>
        )

        return buttonGroup
    }
}