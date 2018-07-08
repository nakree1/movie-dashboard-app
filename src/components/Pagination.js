import React from 'react'

export default class FilmCard extends React.Component {

    getPagination = (current, max, range = 5) => {
        let c = current
        let m = max
        let r = range
        let delta = r % 3
        let arr = []

        // if (max <= range) {
        //     for (let i = 1; i <= max; i++) {
        //         arr.push(i)
        //     }
        //     return arr
        // }

        // if (current + range >= max) {
        //     for (let i = max; i <= max - range; i--) {
        //         arr.push(i)
        //     }
        //     return arr
        // }

        console.log('Current:')
        console.log(c)
        console.log('Max:')
        console.log(m)
        console.log('Delta:')
        console.log(delta)

        let right = c + delta > m ? m : c + delta
        let left = c - delta <= 1 ? 1 : c - delta

        let diff = right - left + 1

        let diffLeft = left - c
        let diffRight = right - c
        console.log('left right diff <--')
        console.log(diffLeft, diffRight)

        if (diffRight !== 2) left = left - diffRight
        if (diffLeft !== -2) right = right - diffLeft

        // if (diffRight !== 2) left = left - diffRight
        if (diffLeft === 0) right = right + diffRight
        if (diffRight === 0) left = left + diffLeft

        console.log('left | right:')
        console.log(left, right)
        console.log('diff:')
        console.log(diff)

        for (let i = left; i <= right; i++) {
            arr.push(i)
        }
        // console.log(temp1)
       return arr


    }

    // << < 6 8 9 10 11> >>
    render() {
        console.log('pagination')
        console.log(this.props)
        const {page, totalPages} = this.props

        const prevArrows = ['<<', '<']
        const nextArrows = ['>', '>>']
        const pages = this.getPagination(page, totalPages)
        const pagination = [...prevArrows, ...pages, ...nextArrows]

        console.log(pagination)

        // console.log(this.getPagination(1, 12))
        // console.log(this.getPagination(2, 12))
        // console.log(this.getPagination(3, 12))
        // console.log(this.getPagination(4, 12))
        // console.log(this.getPagination(5, 12))
        // console.log(this.getPagination(6, 12))
        // console.log(this.getPagination(7, 12))
        // console.log(this.getPagination(8, 12))
        // console.log(this.getPagination(9, 12))
        // console.log(this.getPagination(10, 12))
        // console.log(this.getPagination(11, 12))
        // console.log(this.getPagination(12, 12))
        // console.log(this.getPagination(1, 3))
        // console.log(this.getPagination(2, 3))
        // console.log(this.getPagination(3, 3))
        // console.log(this.getPagination(49, 50))
        // console.log(this.getPagination(50, 50))

        const handler = this.props.handler
        const newButtons = pagination.map((item) => {
            let selected = (item === page) ? '' : '-outline'
            // let disabled = (page === 1) ? true : false
            let name

            switch (item) {
                case '<<':
                    name = 'first'
                    break

                case '<':
                    name = 'prev'
                    break

                case '>':
                    name = 'next'
                    break

                case '>>':
                    name = 'last'
                    break

                default:
                    name = item
            }

            return <button className={`btn btn${selected}-secondary`} key={name} onClick={() => {handler(name)}}>{item}</button>
        })


        const buttonGroup = (
            <div className="btn-group btn-group ">
                {newButtons}
            </div>
        )
        // const buttonGroup = (
        //     <div className="btn-group btn-group ">
        //         <button className="btn btn-outline-secondary" name="return" onClick={() => {handler('return')}}>
        //             First Page
        //         </button>
        //         <button className="btn btn-outline-secondary" name="prev" onClick={() => {handler('prev')}}>
        //             Prev
        //         </button>
        //         <button className="btn btn-outline-secondary" name="next" onClick={() => {handler('next')}}>
        //             Next
        //         </button>
        //     </div>
        // )

        return buttonGroup
    }
}