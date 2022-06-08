export const variants = ['clean' , 'primary' , 'secondary' , 'accent', 'border']
export const sizes = ['xs' , 'sm' , 'md' , 'lg' , 'xl' , '2xl' , '3xl' , '4xl' , '5xl' , '6xl'] as const

/*export type Size = typeof sizes[number]
export type Variant = typeof variants[number]*/

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
export type Variant = 'clean' | 'primary' | 'secondary' | 'accent' | 'border' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
