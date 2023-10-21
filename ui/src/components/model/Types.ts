export interface Page {
    pageable: Pageable;
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    sort: PageSort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

interface Pageable {
    sort: PageSort;
    offset: number;
    pageSize: number;
    pageNumber: number;
    unpaged: boolean;
    paged: boolean;
}

interface PageSort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

interface Revision {
    time: number;
    revisionType: string;
}

export interface User {
    id: number,
    name: string,
    isAdmin: boolean,
}

interface PageContentUser extends Revision {
    user: User;
}

export interface UserHistory extends Page {
    content: PageContentUser[]
}

export interface Question {
    id: number,
    question: string,
    type: string,
    points: number,
    shouldUseComponents: boolean,
}

export interface QuestionDetails {
    id: number,
    question: string,
    type: string,
    points: number,
    shouldUseComponents: boolean,
    scopes: string[],
}

interface PageContentQuestion extends Revision {
    question: QuestionDetails;
}

export type QuestionHistory = Page & { content: PageContentQuestion[] };

export interface Product {
    id: number,
    name: string,
    department: string,
    description: string,
    version: number,
}

export interface ProductSummarization extends Product {
    teamLeader: string,
}

export interface ProductDetails {
    id: number,
    name: string,
    department: string,
    description: string,
    version: number,
    scopes: string[],
    components: string[],
    productTeamMembers: ProductTeamMember[],
}

export interface ProductTeamMember {
    id: number,
    type: string,
    name: string,
}

interface PageContentProduct extends Revision {
    product: ProductDetails;
}

export interface ProductHistory extends Page {
    content: PageContentProduct[]
}

export interface Audit {
    id: number,
    isClosed: boolean,
    dateOfAudit: string,
    productName: string,
    auditYearPartName: string,
    version: number,
}

export interface AuditPage extends Page {
    content: Audit[]
}

export interface AuditDetails {
    id: number,
    isClosed: boolean,
    dateOfAudit: string,
    productName: string,
    auditYearPartName: string,
    version: number,
    scopes: string[],
    components: string[],
    auditTeamMembers: AuditTeamMember[],
    auditChecks: AuditCheck[],
}

export interface AuditSummarization {
    id: number,
    isClosed: boolean,
    dateOfAudit: string,
    productName: string,
    score: number,
    checks: number,
    checksCompleted: number,
    checksApproved: number,
    version: number,
}

interface PageContentAudit extends Revision {
    audit: AuditDetails;
}

export interface AuditHistory extends Page {
    content: PageContentAudit[]
}

export interface AuditYearPart {
    id: number,
    name: string,
    startDate: number[],
    endDate: number[],
    isClosed: boolean,
}

export interface AuditYearPartSummarization extends AuditYearPart {
    score: number,
    checks: number,
    checksCompleted: number,
    checksApproved: number
}

interface PageContentAuditYearPart extends Revision {
    auditYearPart: AuditYearPart;
}

export interface AuditYearPartHistory extends Page {
    content: PageContentAuditYearPart[]
}

export interface AuditTeamMember {
    id: number,
    type: string,
    name: string,
}

export interface AuditCheck {
    id: number,
    shouldUseComponents: boolean,
    proof: string,
    questionType: string,
    question: string,
    version: number,
    maxAvailablePoints: number,
    pointsNormalized: number,
    auditCheckComponentsDtos: AuditCheckComponent[],
}

export interface AuditCheckComponent {
    id: number,
    version: number,
    component: string,
    pointsAwarded: number,
    proof: string,
}

export interface AuditCheckSimple {
    id: number,
    shouldUseComponents: boolean,
    proof: string,
    version: number
}

export interface AuthToken {
    access_token: string,
    expires_in: number,
    refresh_token: string,
    refresh_expires_in: number,
    token_type: string,
    not_before_policy: number,
    session_state: string,
    scope: string,
}
