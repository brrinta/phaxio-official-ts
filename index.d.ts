declare module 'phaxio-official' {
    export = Phaxio
}

export class Phaxio {
    apiKey: string;
    apiSecret: string;

    url: string;
    agentOptions: AgentOptions;

    public: Public;
    faxes: Faxes
    account: Account
    phaxCode: PhaxCode
    phoneNumber: PhoneNumber

    constructor(apiKey: string, apiSecret: string, minTLSVersion?: string)
}


export class Public {
    constructor(url: string, agentOptions: AgentOptions)


    getAreaCodes(options: {
        toll_free: string,
        country_code: string,
        country: string,
        state: string,
        per_page: string,
        page: string,
    })

    getCountries(options: {
        per_page: string,
        page: string,
    })
}


export interface AgentOptions {
    minVersion: string | 'TLSv1.2'
}

export class Fax {
    constructor(apiKey, apiSecret, url, success, message, data, agentOptions)

    cancel(): Promise<{
        success: boolean,
        message: string,
        data: {
            id: number
        }
    }>

    resend(callback_url: string): Promise<{
        success: boolean,
        message: string,
        data: {
            id: number
        }
    }>

    getInfo(): Promise<{
        success: boolean,
        message: string,
        data: {
            id: number,
            direction: string,
            num_pages: number,
            status: string,
            is_test: boolean,
            created_at: string,
            caller_id: string,
            from_number: string,
            completed_at: string,
            cost: number,
            tags: {
                order_id: string
            },
            recipients: Array<{
                phone_number: string,
                status: string,
                retry_count: number,
                completed_at: string,
                bitrate: number,
                resolution: number,
                error_type: string,
                error_id: string,
                error_message: string
            }>,
            to_number: string,
            error_id: string,
            error_type: string,
            error_message: string
        }
    }>

    getFile(thumbnail: string): Promise<any>

    deleteFile(): Promise<{
        success: boolean,
        message: string
    }>

    testDelete(): Promise<{
        success: boolean,
        message: string
    }>
}

export class Faxes {
    constructor(apiKey, apiSecret, url, agentOptions)

    cancel(id: string): Promise<{
        success: boolean,
        message: string,
        data: {
            id: number
        }
    }>

    resend(options: { id: string, callback_url: string }): Promise<{
        success: boolean,
        message: string,
        data: {
            id: number
        }
    }>

    testDelete(id): Promise<{
        success: boolean,
        message: string
    }>

    getInfo(id): Promise<{
        success: boolean,
        message: string,
        data: {
            id: number,
            direction: string,
            num_pages: number,
            status: string,
            is_test: boolean,
            created_at: string,
            caller_id: string,
            from_number: string,
            completed_at: string,
            cost: number,
            tags: {
                order_id: string
            },
            recipients: Array<{
                phone_number: string,
                status: string,
                retry_count: number,
                completed_at: string,
                bitrate: number,
                resolution: number,
                error_type: string,
                error_id: string,
                error_message: string
            }>,
            to_number: string,
            error_id: string,
            error_type: string,
            error_message: string
        }
    }>

    getFile(options: { id: string, thumbnail: string }): Promise<any>

    deleteFile(id): Promise<{
        success: boolean,
        message: string
    }>

    create(options: {
        to: string,
        file: string,
        content_url: string,
        header_text: string,
        batch_delay: string,
        batch_collision_avoidance: string,
        callback_url: string,
        cancel_timeout: string,
        tags: string,
        caller_id: string,
        test_fail: string,
    }): Promise<Fax>

    testReceive(options: {
        file: string,
        from_number: string,
        to_number: string,
    }): Promise<{
        success: boolean,
        message: string
    }>

    listFaxes(options: {
        created_before: string,
        created_after: string,
        direction: string,
        status: string,
        phone_number: string,
        tags: string,
        per_page: string,
        page: string,
    }): Promise<{
        success: boolean,
        message: string,
        data: Array<{
            id: number,
            direction: string,
            num_pages: number,
            status: string,
            is_test: boolean,
            created_at: string,
            caller_id: string,
            from_number: string,
            completed_at: string,
            cost: number,
            tags: {
                order_id: string
            },
            recipients: [
                {
                    phone_number: string,
                    status: string,
                    retry_count: number,
                    completed_at: string,
                    bitrate: number,
                    resolution: number,
                    error_type: string,
                    error_id: string,
                    error_message: string
                }
            ],
            to_number: string,
            error_id: string,
            error_type: string,
            error_message: string
        }>,
        paging: {
            total: number,
            per_page: number,
            page: number
        }
    }>
}

export class Account {
    constructor(apiKey: string, apiSecret: string, url: string, agentOptions: AgentOptions)

    status()
}

export class PhaxCode {
    constructor(apiKey: string, apiSecret: string, url: string, agentOptions: AgentOptions)

    create(options: { metadata: string, type: string })

    get(options: { id: string, type: string })
}

export class PhoneNumber {
    constructor(apiKey: string, apiSecret: string, url: string, agentOptions: AgentOptions)

    releaseNumber(number): Promise<{
        success: boolean,
        message: string
    }>

    listNumbers(options?: { country_code: number, area_code: number }): Promise<{
        success: boolean,
        message: string,
        data: Array<{
            phone_number: string,
            city: string,
            state: string,
            country: string,
            cost: number,
            last_billed_at: string,
            provisioned_at: string,
            callback_url: string
        }>,
        paging: {
            total: number,
            per_page: number,
            page: number
        }
    }>

    getNumberInfo(number: string): Promise<{
        success: boolean,
        message: string,
        data: {
            phone_number: string,
            city: string,
            state: string,
            country: string,
            cost: number,
            last_billed_at: string,
            provisioned_at: string,
            callback_url: string
        }
    }>

    provisionNumber(options: { country_code: number, area_code: number, callback_url: string }): Promise<{
        success: boolean,
        message: string,
        data: {
            phone_number: string,
            city: string,
            state: string,
            country: string,
            cost: number,
            last_billed_at: string,
            provisioned_at: string,
            callback_url: string
        }
    }>
}



