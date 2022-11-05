export type figure = {
    id :string,
    name : string,
    image : string,
    price : string
}

export type quantity = {
    quantity : string
}

export type cart = figure & quantity



